import React from 'react';
import styled from 'styled-components';
import Crypto from './Crypto';
import Exchange from './Exchange';

export default function Cards({ theme, data }) {
  return (
    <Card>
      <Crypto
        color={theme.CryptoColor}
        logo={data.CryptoLogo}
        name={data.CryptoName}
        quote={data.QuoteSymbol}
        ticker={data.CryptoTicker}
      />
      <Line />
      <Exchange
        exchangeOneLink={data.ExchangeOne?.ExchangeLink}
        exchangeTwoLink={data.ExchangeTwo?.ExchangeLink}
        exchangeOneName={data.ExchangeOne?.ExchangeName}
        exchangeOneBidPrice={data.ExchangeOne?.BidPrice}
        exchangeOneAskPrice={data.ExchangeOne?.AskPrice}
        exchangeTwoName={data.ExchangeTwo?.ExchangeName}
        exchangeTwoBidPrice={data.ExchangeTwo?.BidPrice}
        exchangeTwoAskPrice={data.ExchangeTwo?.AskPrice}
        btnRecommendationBackgroundColor={
          theme.BtnRecommendationBackgroundColor
        }
      />
    </Card>
  );
}

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
`;

const Line = styled.div`
  border-bottom: 1px solid #000000;
  margin: 0 20px;
`;
