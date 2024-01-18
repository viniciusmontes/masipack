import Admin from 'pages/Admin';
import Auth from 'pages/Auth';

import { Route, Router, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
