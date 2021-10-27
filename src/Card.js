import React from 'react';
import styled from 'styled-components';
import CryptoName from './CryptoName';
import Exchange from './Exchange';
import Types from './Types';

export default function Cards(props) {
  return (
      <Card color={props.color}>
        <CryptoName name={props.cryptoName} />
        <Types />
        <Exchange />
      </Card>
  );
}

const Card = styled.div`
  width: 500px;
  height: 540px;
  background: ${(props) => props.color || 'palevioletred'};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  margin: 30px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.5);

`;
