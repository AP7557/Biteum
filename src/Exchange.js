import React from 'react';
import styled from 'styled-components';
import Price from './Price';

export default function Exchange(props) {
  console.log(props, props.btnRecommendationBackgroundColor);
  return (
    <div>
      <EachExchangeContainer>
        <ExchangeName>{props.exchangeOneName}</ExchangeName>
        <Price
          backgroundColor={
            props.exchangeOneAskPrice < props.exchangeTwoAskPrice &&
            props.btnRecommendationBackgroundColor
          }
          {...props}>
          {Math.round(props.exchangeOneAskPrice * 100) / 100 || 'Loading'}
        </Price>
        <Price
          backgroundColor={
            props.exchangeOneBidPrice > props.exchangeTwoBidPrice &&
            props.btnRecommendationBackgroundColor
          }>
          {Math.round(props.exchangeOneBidPrice * 100) / 100 || 'Loading'}
        </Price>
      </EachExchangeContainer>
      <EachExchangeContainer>
        <ExchangeName>{props.exchangeTwoName}</ExchangeName>
        <Price
          backgroundColor={
            props.exchangeTwoAskPrice < props.exchangeOneAskPrice &&
            props.btnRecommendationBackgroundColor
          }
          {...props}>
          {Math.round(props.exchangeTwoAskPrice * 100) / 100 || 'Loading'}
        </Price>
        <Price
          backgroundColor={
            props.exchangeTwoBidPrice > props.exchangeOneBidPrice &&
            props.btnRecommendationBackgroundColor
          }>
          {Math.round(props.exchangeTwoBidPrice * 100) / 100 || 'Loading'}
        </Price>
      </EachExchangeContainer>
    </div>
  );
}

const ExchangeName = styled.div`
  font-size: 30px;
  color: white;
  margin-top: 45px;
  width: 170px;
`;

const EachExchangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;
