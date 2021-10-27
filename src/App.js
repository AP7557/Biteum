import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Cards from './Card';

function App() {
  const [data, setData] = useState([]);
  /**{CardColor: 'Color',
   *  Crypto: {CryptoName: 'Bitcoin',
   *           CryptoColor: 'Color'},,
   *  Type: {BuyColor: 'Color',
   *         SellColor: 'Color'},
   *  ExchangeOne: {ExchangeName: 'BinanceUS',
   *                ExchangeColor: 'Color'},
   *                   BidPrice: name,
   *                   AskPrice: name},
   *  ExchangeTwo: {ExchangeName: 'CoinbasePro',
   *                ExchangeColor: 'Color'},
   *                BidPrice: name,
   *                AskPrice: name},
   *  BackgroundColor: 'Color'}
   *  } */
  useEffect(() => {
    axios
      .get('/hello')
      .then((response) => response.data)
      .then((data) => console.log(data));
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
