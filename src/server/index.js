const express = require('express');
const axios = require('axios');

const PORT = process.env.PORT || 4000;

const app = express();

const getLinks = (symbol) => [
  axios.get(
    `https://dev-api.shrimpy.io/v1/orderbooks?exchange=binanceus&baseSymbol=${symbol}&quoteSymbol=USD&limit=1`
  ),
  axios.get(
    `https://dev-api.shrimpy.io/v1/orderbooks?exchange=coinbasepro&baseSymbol=${symbol}&quoteSymbol=USD&limit=1`
  ),
];

const putExchangeBidAskInDic = (dic, data, whichExchange) => {
  dic[whichExchange] = {
    ExchangeName: data.exchange,
    BidPrice: data.orderBook.bids[0].price,
    AskPrice: data.orderBook.asks[0].price,
  };
  return dic;
};

const getData = (data, CryptoName) => {
  const dic = {};
  dic['CryptoName'] = CryptoName;
  putExchangeBidAskInDic(dic, data[0].orderBooks[0], 'ExchangeOne');
  putExchangeBidAskInDic(dic, data[1].orderBooks[0], 'ExchangeTwo');
  return dic;
};

app.get('/getBitcoinData', (req, res) => {
  Promise.all(getLinks('BTC'))
    .then((response) => [response[0].data[0], response[1].data[0]])
    .then((data) => {
      res.json(getData(data, 'Bitcoin'));
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/getEthereumData', (req, res) => {
  Promise.all(getLinks('ETH'))
    .then((response) => [response[0].data[0], response[1].data[0]])
    .then((data) => {
      res.json(getData(data, 'Ethereum'));
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
