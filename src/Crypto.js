import React from 'react';
import styled from 'styled-components';

export default function Crypto(props) {
  return (
    <Header>
      <Image src={props.logo} alt={'Loading'} />
      <Label color={props.color}>
        <Name>{props.name}</Name>
        <Ticker>{props.ticker}/{props.quote}</Ticker>
      </Label>
    </Header>
  );
}

const Name = styled.h1`
  font-size: 50px;
  margin: 0;
  font-weight: 600;
  line-height: 70.31px;
`;

const Header = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: fit-content;
`;
const Label = styled.div`
  padding: 0 0 41px 18.45px;
  flex-direction: column;
  color: ${(props) => props.color};
`;

const Ticker = styled.span`
  font-weight: 400;
  font-size: 20px;
  padding-left: 10px;
`;