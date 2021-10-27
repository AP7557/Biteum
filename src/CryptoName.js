import React from 'react';
import styled from 'styled-components';

export default function CryptoName(props) {
  return <Name>{props.name}</Name>;
}

const Name = styled.h1`
  font-size: 80px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  font-weight: normal;
opacity:
`;
