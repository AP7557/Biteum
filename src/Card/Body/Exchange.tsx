import React from 'react';
import styled from 'styled-components';
import { cryptoDataType } from '../../App';
import Price from './Price';

interface ExchangeProps {
  data: cryptoDataType;
}

/**
 * Display the Exchange data in the card
 * @param data
 * @return React.FunctionComponent
 */
const Exchange: React.FC<ExchangeProps> = ({ data }) => {
  return (
    <div>
      <EachExchangeContainer>
        <ExchangeName>{data.ExchangeOne?.ExchangeName}</ExchangeName>
        <Price
          type={'Buy'}
          link={data.ExchangeOne?.ExchangeLink}
          backgroundColor={
            data.ExchangeOne?.AskPrice < data.ExchangeTwo?.AskPrice
          }>
          {Math.round(data.ExchangeOne?.AskPrice * 100) / 100 || 'Loading'}
        </Price>
        <Price
          type={'Sell'}
          link={data.ExchangeOne?.ExchangeLink}
          backgroundColor={
            data.ExchangeOne?.BidPrice > data.ExchangeTwo?.BidPrice
          }>
          {Math.round(data.ExchangeOne?.BidPrice * 100) / 100 || 'Loading'}
        </Price>
      </EachExchangeContainer>
      <EachExchangeContainer>
        <ExchangeName>{data.ExchangeTwo?.ExchangeName}</ExchangeName>
        <Price
          type={'Buy'}
          link={data.ExchangeTwo?.ExchangeLink}
          backgroundColor={
            data.ExchangeTwo?.AskPrice < data.ExchangeOne?.AskPrice
          }>
          {Math.round(data.ExchangeTwo?.AskPrice * 100) / 100 || 'Loading'}
        </Price>
        <Price
          type={'Sell'}
          link={data.ExchangeTwo?.ExchangeLink}
          backgroundColor={
            data.ExchangeTwo?.BidPrice > data.ExchangeOne?.BidPrice
          }>
          {Math.round(data.ExchangeTwo?.BidPrice * 100) / 100 || 'Loading'}
        </Price>
      </EachExchangeContainer>
    </div>
  );
};

const ExchangeName = styled.div`
  font-size: 30px;
  color: white;
  margin-top: 45px;
  width: 170px;
  @media (max-width: 540px) {
    margin-top: 0;
    width: auto;
  }
`;

const EachExchangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export default Exchange;
