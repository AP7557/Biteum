const express = require('express');
const axios = require('axios');
const path = require('path');

//Using environment variable port otherwise use port 4000
const PORT = process.env.PORT || 4000;
//Initialize express
const app = express();

//Use the build folder to serve the static files
app.use(express.static(path.join(__dirname, '../build')));
//For path '/' run the clients build index.html
app.get('/', (req, res) => {
  res.sendFile(path.join((__dirname, '../build/index.html')));
});

//Get the api link with the distinct crypto/USD pair
const getApiLinks = (symbol) => [
  axios.get(
    `https://dev-api.shrimpy.io/v1/orderbooks?exchange=binanceus&baseSymbol=${symbol}&quoteSymbol=USD&limit=1`
  ),
  axios.get(
    `https://dev-api.shrimpy.io/v1/orderbooks?exchange=coinbasepro&baseSymbol=${symbol}&quoteSymbol=USD&limit=1`
  ),
];

//Set the exchange data(Its bid, ask, name and link) in the dictionary
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

//Get the data from the api and set the data
//(Crypto name, quote symbol(USD), ticker for the crypto name and call the setExchangeInDic function)
//in the dictionary
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
  //Resolve both the api links promise with crypto name BTC
  //Once its resolved get the data are return the data as a list
  //Then call the getDataInDic function to set the data in the dictionary and send it to client
  Promise.all(getApiLinks('BTC'))
    .then((response) => [response[0].data[0], response[1].data[0]])
    .then((data) => {
      res.json(getDataInDic(data, 'Bitcoin'));
    })
    .catch((error) => {
      //If any error occurs log the error
      console.log(error);
    });
});

app.get('/getEthereumData', (req, res) => {
  //Resolve both the api links promise with crypto name ETH
  //Once its resolved get the data are return the data as a list
  //Then call the getDataInDic function to set the data in the dictionary and send it to client
  Promise.all(getApiLinks('ETH'))
    .then((response) => [response[0].data[0], response[1].data[0]])
    .then((data) => {
      res.json(getDataInDic(data, 'Ethereum'));
    })
    .catch((error) => {
      //If any error occurs log the error
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
