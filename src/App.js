import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Cards from './Cards';

const theme = {
  Bitcoin: {
    CryptoColor: '#FFC300',
    BtnRecommendationBackgroundColor: '#69ac0e',
  },
  Ethereum: {
    CryptoColor: '#FF8E00',
    BuyColor: '#026600',
    SellColor: '#A82C2C',
    ExchangeOneColor: '#816114',
    ExchangeTwoColor: '#3C3F54',
    BtnRecommendationBackgroundColor: '#69ac0e',
  },
};

function App() {
  /**{
   *  CryptoName: 'Bitcoin',
   *  ExchangeOne: {ExchangeName: 'BinanceUS',
   *                   BidPrice: name,
   *                   AskPrice: name},
   *  ExchangeTwo: {ExchangeName: 'CoinbasePro',
   *                BidPrice: name,
   *                AskPrice: name}
   *  } */
  const [data, setData] = useState({
    Bitcoin: {
      CryptoName: 'Bitcoin',
      CryptoLogo: 'bitcoin1.png',
      QuoteSymbol: 'USD',
      CryptoTicker: 'BTC',
      ExchangeOne: {
        ExchangeName: 'BinanceUS',
        BidPrice: 23423,
        AskPrice: 241234,
        ExchangeLink: 'https://www.binance.us/en/trade/pro/BTCUSD',
      },
      ExchangeTwo: {
        ExchangeName: 'CoinbasePro',
        BidPrice: 3432,
        AskPrice: 3453,
        ExchangeLink: 'https://www.binance.us/en/trade/pro/BTCUSD',
      },
    },
    Ethereum: {
      CryptoName: 'Ethereum',
      CryptoLogo: 'ethereum1.png',
      QuoteSymbol: 'USD',
      CryptoTicker: 'ETC',
      ExchangeOne: {
        ExchangeName: 'BinanceUS',
        BidPrice: 123,
        AskPrice: 442,
        ExchangeLink: 'https://www.binance.us/en/trade/pro/ETCUSD',
      },
      ExchangeTwo: {
        ExchangeName: 'CoinbasePro',
        BidPrice: 2345,
        AskPrice: 423,
        ExchangeLink: 'https://www.binance.us/en/trade/pro/ETCUSD',
      },
    },
  });

  const apiCall = () => {
    axios
      .get('/getBitcoinData')
      .then((response) => response.data)
      .then((data) =>
        setData((prev) => {
          return { ...prev, Bitcoin: data };
        })
      )
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('/getEthereumData')
      .then((response) => response.data)
      .then((data) =>
        setData((prev) => {
          return { ...prev, Ethereum: data };
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   apiCall();
  //   console.log('Before');
  //   const interval = setInterval(() => {
  //     console.log('After');
  //     apiCall();
  //   }, 65000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <MainPage>
        <Cards theme={theme.Bitcoin} data={data.Bitcoin} />
        <Cards theme={theme.Ethereum} data={data.Ethereum} />
      </MainPage>
    </div>
  );
}

const MainPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #383842;
  font-family: serif, monospace;
`;
export default App;
