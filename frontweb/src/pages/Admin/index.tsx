import { Route, Switch } from 'react-router';
import Sidebar from './Sidebar';
import Configures from './Configures';
import PermissionView from './PermissionView';
import PermissionGroupView from './PermissionGroupView';
import UsersView from './UsersView';
import SecurityPolicyView from './SecurityPolicyView';
import SupportView from './SupportView';
import RepportsView from './RepportsView';

import './styles.css';

const Admin = () => {
  return (
    <>
      <div className="admin-container">
        <Sidebar />
        <div className="admin-content">
          <Switch>
            <Route path="/admin/configures">
              <Configures />
            </Route>
            <Route path="/admin/permissions">
              <PermissionView />
            </Route>
            <Route path="/admin/politic">
              <SecurityPolicyView />
            </Route>
            <Route path="/admin/group">
              <PermissionGroupView />
            </Route>
            <Route path="/admin/users">
              <UsersView />
            </Route>
            <Route path="/admin/repports">
              <RepportsView />
            </Route>
            <Route path="/admin/support">
              <SupportView />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Admin;
