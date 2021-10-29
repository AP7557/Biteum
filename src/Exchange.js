import React from 'react';
import styled from 'styled-components';
import Price from './Price';

export default function Exchange(props) {
  return (
    <div>
      <EachExchangeContainer>
        <ExchangeName>{props.exchangeOneName}</ExchangeName>
        <Price
          link={props.exchangeOneLink}
          backgroundColor={
            props.exchangeOneAskPrice < props.exchangeTwoAskPrice &&
            props.btnRecommendationBackgroundColor
          }
          {...props}>
          {Math.round(props.exchangeOneAskPrice * 100) / 100 || 'Loading'}
        </Price>
        <Price
          link={props.exchangeOneLink}
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
          link={props.exchangeTwoLink}
          backgroundColor={
            props.exchangeTwoAskPrice < props.exchangeOneAskPrice &&
            props.btnRecommendationBackgroundColor
          }
          {...props}>
          {Math.round(props.exchangeTwoAskPrice * 100) / 100 || 'Loading'}
        </Price>
        <Price
          link={props.exchangeTwoLink}
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
