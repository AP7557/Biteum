import React from 'react';
import styled from 'styled-components';

export default function Types() {
  return (
    <div>
      <TypeContainer>
        <Type>Buy</Type>
        <Type>Sell</Type>
      </TypeContainer>
      <Line />
    </div>
  );
}

const Line = styled.div`
  border-bottom: 1px solid #000000;
  margin: 0 50px;
`;

const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Type = styled.span`
  font-size: 35px;
`;
