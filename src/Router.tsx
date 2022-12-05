import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Coin from './routes/Coin';
import CoinList from './routes/CoinList';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/react-masterclass/:coinId'}>
          <Coin />
        </Route>
        <Route path={'/react-masterclass'}>
          <CoinList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
