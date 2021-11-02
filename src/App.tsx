import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import Cards from './Card/Cards';

export type cryptoDataType =
  | {
      CryptoName: string;
      CryptoLogo: string;
      CryptoColor: string;
      QuoteSymbol: string;
      CryptoTicker: string;
      ExchangeOne: {
        ExchangeName: string;
        BidPrice: number;
        AskPrice: number;
        ExchangeLink: string;
      };
      ExchangeTwo: {
        ExchangeName: string;
        BidPrice: number;
        AskPrice: number;
        ExchangeLink: string;
      };
    }
  | Record<string, never>;

const App: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<{
    Bitcoin: cryptoDataType;
    Ethereum: cryptoDataType;
  }>({ Bitcoin: {}, Ethereum: {} });

  /**
   * Get the Api data from the server
   * Put it in the state
   */
  const getApiData = () => {
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
    getApiData();
    const interval = setInterval(() => {
      getApiData();
    }, 65000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MainPage>
      {Object.entries(cryptoData.Bitcoin).length === 0 ||
      Object.entries(cryptoData.Ethereum).length === 0 ? (
        <Loading />
      ) : (
        <>
          <Cards data={cryptoData.Bitcoin} />
          <Cards data={cryptoData.Ethereum} />
        </>
      )}
    </MainPage>
  );
};

const MainPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-family: serif, monospace;
`;

const loading = keyframes`
  0% { height: 0px; width: 0px; transform: rotate(0deg); }
 20% { border-radius: 40%; height: 50px; width: 50px; }
 50% { border-width: 10px; height: 150px; width: 150px; }
 80% { border-radius: 40%; height: 50px; width: 50px; }
 100% { height: 0px; width: 0px; transform: rotate(360deg); }
`;

const Loading = styled.div`
  border: outset #f3f3f3;
  animation: ${loading} 3s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
`;

export default App;
