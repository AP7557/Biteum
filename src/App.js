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
   *  CryptoName: 'name',
   *  CryptoLogo: 'file',
   *  QuoteSymbol: 'name',
   *  CryptoTicker: 'name',
   *  ExchangeOne: {ExchangeName: 'name',
   *                   BidPrice: name,
   *                   AskPrice: name,
   *                   ExchangeLink: 'link name',
   *              },
   *  ExchangeTwo: {ExchangeName: 'name',
   *                BidPrice: name,
   *                AskPrice: name,
   *                ExchangeLink: 'link name'
   *              },
   *  } */
  const [data, setData] = useState({
    Bitcoin: {
      CryptoName: 'Bitcoin',
      CryptoLogo: 'bitcoin1.png',
      QuoteSymbol: 'USD',
      CryptoTicker: 'BTC',
      ExchangeOne: {
        ExchangeName: 'BinanceUS',
        BidPrice: 324,
        AskPrice: 234,
        ExchangeLink: 'link name',
      },
      ExchangeTwo: {
        ExchangeName: 'CoinbasePro',
        BidPrice: 232,
        AskPrice: 234,
        ExchangeLink: 'link name',
      },
    },
    Ethereum: {
      CryptoName: 'Ethereum',
      CryptoLogo: 'ethereum1.png',
      QuoteSymbol: 'USD',
      CryptoTicker: 'ETH',
      ExchangeOne: {
        ExchangeName: 'BinanceUS',
        BidPrice: 231,
        AskPrice: 123,
        ExchangeLink: 'link name',
      },
      ExchangeTwo: {
        ExchangeName: 'CoinbasePro',
        BidPrice: 132,
        AskPrice: 123,
        ExchangeLink: 'link name',
      },
    },
  });

  const apiCall = () => {
    axios
      .get('/getBitcoinData')
      .then((response) => response.data)
      .then((data) =>
        setData((prev) => {
          return { ...prev, Bitcoin: { ...data, CryptoLogo: 'bitcoin1.png' } };
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
          return {
            ...prev,
            Ethereum: { ...data, CryptoLogo: 'ethereum1.png' },
          };
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    apiCall();
    const interval = setInterval(() => {
      console.log('After');
      apiCall();
    }, 65000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MainPage>
      <Cards theme={theme.Bitcoin} data={data.Bitcoin} />
      <Cards theme={theme.Ethereum} data={data.Ethereum} />
    </MainPage>
  );
}

const MainPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-family: serif, monospace;
`;
export default App;
