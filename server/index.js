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

/**
 * Get the api link with the distinct crypto/USD pair
 * @param {string} symbol
 * @return {list} list of api links
 */

const getApiLinks = (symbol) => [
  axios.get(
    `https://dev-api.shrimpy.io/v1/orderbooks?exchange=gemini&baseSymbol=${symbol}&quoteSymbol=USD&limit=1`
  ),
  axios.get(
    `https://dev-api.shrimpy.io/v1/orderbooks?exchange=coinbasepro&baseSymbol=${symbol}&quoteSymbol=USD&limit=1`
  ),
];

/**
 * Set the exchange data(Its bid, ask, name and link) in the dictionary
 * @param {object} dic
 * @param {object} data
 * @param {string} whichExchange
 * @return {object} dic
 */
const setExchangeInDic = (dic, data, whichExchange) => {
  dic[whichExchange] = {
    ExchangeName: data.exchange,
    BidPrice: data.orderBook.bids[0].price,
    AskPrice: data.orderBook.asks[0].price,
    ExchangeLink:
      data.exchange === 'Gemini'
        ? `https://www.gemini.com/prices`
        : `https://pro.coinbase.com/trade/${dic.CryptoTicker}-${dic.QuoteSymbol}`,
  };
  return dic;
};

/**
 * Get the data from the api and set the data in dictionary
 * @param {object} data
 * @param {string} cryptoName
 * @return {object} dic
 */
const setDataInDic = (data, cryptoName) => {
  const dic = {};
  dic['CryptoName'] = cryptoName;
  dic['QuoteSymbol'] = data[0].quoteSymbol;
  dic['CryptoTicker'] = data[0].baseSymbol;
  setExchangeInDic(dic, data[0].orderBooks[0], 'ExchangeOne');
  setExchangeInDic(dic, data[1].orderBooks[0], 'ExchangeTwo');
  return dic;
};

/**
 * Promise of both api links with crypto name BTC, set the data and send the data to the client
 */
app.get('/getBitcoinData', (req, res) => {
  Promise.all(getApiLinks('BTC'))
    .then((response) => [response[0].data[0], response[1].data[0]])
    .then((data) => {
      res.json(setDataInDic(data, 'Bitcoin'));
    })
    .catch((error) => {
      //If any error occurs log the error
      console.log(error);
    });
});

/**
 * Promise of both api links with crypto name ETH, set the data and send the data to the client
 */
app.get('/getEthereumData', (req, res) => {
  Promise.all(getApiLinks('ETH'))
    .then((response) => [response[0].data[0], response[1].data[0]])
    .then((data) => {
      res.json(setDataInDic(data, 'Ethereum'));
    })
    .catch((error) => {
      //If any error occurs log the error
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
