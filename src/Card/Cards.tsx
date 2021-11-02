import React from 'react';
import styled from 'styled-components';
import Crypto from './Header/Crypto';
import Exchange from './Body/Exchange';
import { cryptoDataType } from '../App';

interface CardProps {
  data: cryptoDataType;
}

/**
* Display the card
* @param data
* @return React.FunctionComponent
*/
const Cards: React.FC<CardProps> = ({ data }) => {
  return (
    <Card>
      <Crypto
        logo={data.CryptoLogo}
        name={data.CryptoName}
        color={data.CryptoColor}
        ticker={data.CryptoTicker}
        quote={data.QuoteSymbol}
      />
      <Line />
      <Exchange data={data} />
    </Card>
  );
};

const Card = styled.div`
  width: 35em;
  background: #3b3b4b;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  padding: 20px;
  @media (max-width: 1100px) {
    margin: 30px;
  }
  @media (max-width: 540px) {
    width: 100%;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid #000000;
  margin: 0 20px;
`;

export default Cards;
