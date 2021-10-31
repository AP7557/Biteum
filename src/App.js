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
  const [data, setData] = useState({ Bitcoin: {}, Ethereum: {} });

  //Get data from server
  const apiCall = () => {
    //API call to server to get BTCs data, and then put that data
    //along with its logo in Bitcoin object in data
    axios
      .get('/getBitcoinData')
      .then((response) => response.data)
      .then((data) =>
        setData((prev) => {
          return {
            ...prev,
            Bitcoin: {
              ...data,
              CryptoLogo: 'bitcoin1.png',
              CryptoColor: '#FFC300',
            },
          };
        })
      )
      .catch((error) => {
        console.log(error);
      });

    //API call to server to get ETHs data, and then put that data
    //along with its logo in Ethereum object in data
    axios
      .get('/getEthereumData')
      .then((response) => response.data)
      .then((data) =>
        setData((prev) => {
          return {
            ...prev,
            Ethereum: {
              ...data,
              CryptoLogo: 'ethereum1.png',
              CryptoColor: '#FF8E00',
            },
          };
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    //Initial call to API
    apiCall();
    //Call API every 65 seconds as we can only make 10 api call in 60 seconds
    const interval = setInterval(() => {
      apiCall();
    }, 65000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MainPage>
      <Cards data={data.Bitcoin} />
      <Cards data={data.Ethereum} />
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
