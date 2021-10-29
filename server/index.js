const express = require('express');
const axios = require('axios');
const path = require('path');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.static(path.join(__dirname, '../build/static')));

const getApiLinks = (symbol) => [
  axios.get(
    `https://dev-api.shrimpy.io/v1/orderbooks?exchange=binanceus&baseSymbol=${symbol}&quoteSymbol=USD&limit=1`
  ),
  axios.get(
    `https://dev-api.shrimpy.io/v1/orderbooks?exchange=coinbasepro&baseSymbol=${symbol}&quoteSymbol=USD&limit=1`
  ),
];

const setExchangeInDic = (dic, data, whichExchange) => {
  dic[whichExchange] = {
    ExchangeName: data.exchange,
    BidPrice: data.orderBook.bids[0].price,
    AskPrice: data.orderBook.asks[0].price,
    ExchangeLink:
      data.exchange === 'BinanceUS'
        ? `https://www.binance.us/en/trade/pro/${dic.CryptoTicker}_${dic.QuoteSymbol}`
        : `https://pro.coinbase.com/trade/${dic.CryptoTicker}-${dic.QuoteSymbol}`,
  };
  return dic;
};

const getDataInDic = (data, CryptoName) => {
  const dic = {};
  dic['CryptoName'] = CryptoName;
  dic['QuoteSymbol'] = data[0].quoteSymbol;
  dic['CryptoTicker'] = data[0].baseSymbol;
  setExchangeInDic(dic, data[0].orderBooks[0], 'ExchangeOne');
  setExchangeInDic(dic, data[1].orderBooks[0], 'ExchangeTwo');
  return dic;
};

app.get('/getBitcoinData', (req, res) => {
  Promise.all(getApiLinks('BTC'))
    .then((response) => [response[0].data[0], response[1].data[0]])
    .then((data) => {
      res.json(getDataInDic(data, 'Bitcoin'));
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/getEthereumData', (req, res) => {
  Promise.all(getApiLinks('ETH'))
    .then((response) => [response[0].data[0], response[1].data[0]])
    .then((data) => {
      res.json(getDataInDic(data, 'Ethereum'));
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('*', (req, res) => {
  res.redirect('/getBitcoinData');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
