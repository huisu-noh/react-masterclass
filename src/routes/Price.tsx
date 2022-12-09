import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchCoinTickers } from '../api';

const AthBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.cardBgColor};
  border-radius: 10px;
  padding: 15px;
`;
const AthDate = styled.div`
  width: 50%;
`;
const AthPrice = styled.div`
  width: 50%;
  font-size: 28px;
  font-weight: 400;
`;

const HourBox = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Before = styled.div`
  background-color: ${(props) => props.theme.cardBgColor};
  border-radius: 10px;
  margin-top: 10px;
  width: 49%;
  padding: 15px;
`;
const Text = styled.div`
  font-size: 15px;
`;
const BeforePrice = styled.div`
  font-size: 25px;
  color: {
  }
`;

interface PriceProps {
  coinId: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<PriceData>(
    ['tickers', coinId],
    () => fetchCoinTickers(coinId)
    // {
    //   refetchInterval: 5000,
    // }
  );
  return (
    <div>
      {isLoading ? (
        'Loading Price...'
      ) : (
        <div>
          <AthBox>
            <AthDate>
              {data?.quotes.USD.ath_date.substr(0, 10)}{' '}
              <Text>Highest attainment</Text>
            </AthDate>
            <AthPrice>${data?.quotes.USD.ath_price.toFixed(3)}</AthPrice>
          </AthBox>
          <HourBox>
            <Before>
              <Text>than an hour ago</Text>
              <BeforePrice>{data?.quotes.USD.percent_change_1h}%</BeforePrice>
            </Before>
            <Before>
              <Text>than 6 hours ago</Text>
              <BeforePrice>{data?.quotes.USD.percent_change_6h}%</BeforePrice>
            </Before>
            <Before>
              <Text>than 12 hours ago</Text>
              <BeforePrice>{data?.quotes.USD.percent_change_12h}%</BeforePrice>
            </Before>
            <Before>
              <Text>than 24 hours ago</Text>
              <BeforePrice>{data?.quotes.USD.percent_change_24h}%</BeforePrice>
            </Before>
            <Before>
              <Text>than 7 days ago</Text>
              <BeforePrice>{data?.quotes.USD.percent_change_7d}%</BeforePrice>
            </Before>
            <Before>
              <Text>than 30 days ago</Text>
              <BeforePrice>{data?.quotes.USD.percent_change_30d}%</BeforePrice>
            </Before>
          </HourBox>
        </div>
      )}
    </div>
  );
}

export default Price;
