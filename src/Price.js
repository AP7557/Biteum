import React from 'react';
import styled from 'styled-components';

export default function Price(props) {
  return (
    <PriceContainer>
      <Type>BUY</Type>
      <Button
        onClick={() => window.open(props.link, '_blank')}
        backgroundColor={props.backgroundColor}>
        {props.children}
      </Button>
    </PriceContainer>
  );
}

const Button = styled.button`
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
  border: 2px solid #000000;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  width: 100%;
  height: 55px;
  color: ${(props) => (props.backgroundColor ? '' : '#c8c8c8')};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  text-align: center;
`;

const PriceContainer = styled.div`
  border-radius: 5px;
  width: 30%;
`;

const Type = styled.div`
  color: white;
  font-size: 20px;
  padding: 10px;
  font-weight: 400;
  text-align: center;
`;
