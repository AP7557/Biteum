import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Cards from './Card/Cards';

function App() {
  /**[Bitcoin:{
   *  CryptoName: 'name',
   *  CryptoLogo: 'file',
   *  CryptoColor: 'color',
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
   *  }, ...] */
  const [cryptoData, setCryptoData] = useState({ Bitcoin: {}, Ethereum: {} });

  //Get data from server
  const getApiData = () => {
    //API call to server to get BTCs data, and then put that data
    //along with its logo in Bitcoin object in temp data
    axios
      .get('/getBitcoinData')
      .then((response) => response.data)
      .then((data) => {
        setCryptoData((prev) => {
          return {
            ...prev,
            Bitcoin: {
              ...data,
              CryptoLogo: 'bitcoin1.png',
              CryptoColor: '#FFC300',
            },
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });

    //API call to server to get ETHs data, and then put that data
    //along with its logo in Ethereum object in temp data
    axios
      .get('/getEthereumData')
      .then((response) => response.data)
      .then((data) => {
        setCryptoData((prev) => {
          return {
            ...prev,
            Ethereum: {
              ...data,
              CryptoLogo: 'ethereum1.png',
              CryptoColor: '#FF8E00',
            },
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    //Initial call to API
    getApiData();
    //Call API every 65 seconds as we can only make 10 api call in 60 seconds
    // const interval = setInterval(() => {
    //   getApiData();
    // }, 65000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <MainPage>
      <Cards data={cryptoData.Bitcoin} />
      <Cards data={cryptoData.Ethereum} />
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
