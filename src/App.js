import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Cards from './Card';

const theme = {
  Bitcoin: {
    CardColor: 'rgba(77, 77, 78, 0.4)',
    CryptoColor: '#F2A900',
    BuyColor: '#00E574',
    SellColor: '#FDB5B5',
    ExchangeOneColor: '#F3BA2F',
    ExchangeTwoColor: '#BCC4FE',
    ButtonBackgroundColor: 'rgba(30, 3, 3, 0.2)',
    BtnRecommendationBackgroundColor: '#1E0303',
  },
  Ethereum: {
    CardColor: 'rgba(236, 240, 241, 0.4)',
    CryptoColor: '#8E5B19',
    BuyColor: '#026600',
    SellColor: '#A82C2C',
    ExchangeOneColor: '#816114',
    ExchangeTwoColor: '#3C3F54',
    ButtonBackgroundColor: 'rgba(250, 253, 255, 0.2)',
    BtnRecommendationBackgroundColor: '#FAFDFF',
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
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('/getBitcoinData')
      .then((response) => response.data)
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('/getEthereumData')
      .then((response) => response.data)
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <MainPage>
        <Cards color={'rgba(77, 77, 78, 0.4)'} cryptoName={'Bitcoin'} />
        <Cards color={'rgba(236, 240, 241, 0.4)'} cryptoName={'Ethereum'} />
      </MainPage>
    </div>
  );
}

const MainPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  background: linear-gradient(
    243.58deg,
    #4d4d4e -16.05%,
    rgba(60, 60, 61, 0) 120.32%
  );
`;
export default App;
