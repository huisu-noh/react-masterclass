import React from 'react';
import { useParams } from 'react-router-dom';

interface RouterParams {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<RouterParams>();
  return <>Coin: {coinId}</>;
}

export default Coin;
