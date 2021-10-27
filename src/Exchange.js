import React from 'react';
import styled from 'styled-components';
import Price from './Price';

export default function Exchange() {
  return (
    <div>
      <ExchangeName>BinanceUS</ExchangeName>
      <Price />

      <ExchangeName>CoinbasePro</ExchangeName>
      <Price />
    </div>
  );
}

const ExchangeName = styled.div`
  font-size: 35px;
  text-align: center;
  margin: 30px 0 6px 0;
`;
