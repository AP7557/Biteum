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
  const [data, setData] = useState({ Bitcoin: {}, Ethereum: {} });

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
  min-width: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #383842;
  font-family: serif, monospace;
`;
export default App;
