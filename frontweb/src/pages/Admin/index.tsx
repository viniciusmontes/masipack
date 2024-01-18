import { Route, Switch } from 'react-router';
import Sidebar from './Sidebar';
import Configures from './Configures';
import Permission from './Permission';
import PermissionGroup from './PermissionGroup';
import SecurityPolicy from './SecurityPolicy';

import './styles.css';


const Admin = () => {
  return (
    <>
      <div className="admin-container">
        <Sidebar />
        <div className="admin-content">
          <Switch>
            <Route path="/admin/configures">
              <Configures/>
            </Route>
            <Route path="/admin/permissions">
              <Permission/>
            </Route>
            <Route path="/admin/politic">
              <SecurityPolicy/>
            </Route>
            <Route path="/admin/group">
              <PermissionGroup/>
            </Route>
            <Route path="/admin/users">
              <h1>Usuários</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Admin;
