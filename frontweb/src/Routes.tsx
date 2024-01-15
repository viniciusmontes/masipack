import PrivateRoute from 'components/PrivateRoute';
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import { Route, Router, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <PrivateRoute path='/home'>
            <Home/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routes;