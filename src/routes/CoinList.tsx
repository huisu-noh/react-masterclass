import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

function CoinList() {
  return <Title>코인 목록</Title>;
}

export default CoinList;
