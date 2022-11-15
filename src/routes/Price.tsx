import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface PriceProps {
  coinId: string;
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      // refetchInterval: 10000,
    }
  );

  const exceptData = data ?? [];
  console.log(exceptData);

  return (
    <>
      <h1>Price</h1>
      {isLoading ? (
        'Loading price...'
      ) : (
        <div>
          {exceptData?.map((price) => (
            <ul key={price.market_cap}>
              <li>time open: {price.time_open}</li>
              <li>time close: {price.time_close}</li>
              <li>open: {price.open}</li>
              <li>high: {price.high}</li>
              <li>low: {price.low}</li>
              <li>close: {price.close}</li>
              <li>volume: {price.volume}</li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
}

export default Price;

// time_open: 1666310400
// time_close: 1666311840
// open: "19045.2"
// high: "19243.9"
// low: "18657.1"
// close: "19171.4"
// volume: "3354.09133836"
// market_cap: 0
