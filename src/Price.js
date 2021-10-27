import React from 'react';
import styled from 'styled-components';

export default function Price() {
  return (
    <PriceContainer>
      <Button onClick={() => window.open('http://www.google.com', "_blank")}>
        Price
      </Button>
      <Button>Price</Button>
    </PriceContainer>
  );
}

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  background: #1e0303;
  border: 2px solid #00e574;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  font-size: 30px;
  padding: 10px 20px;
  color: #00e574;
  cursor: pointer;
`;
