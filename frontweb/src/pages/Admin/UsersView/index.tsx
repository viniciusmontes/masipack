import { useEffect, useState } from 'react';
import { Users } from 'util/users';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import UsersTable from './UsersTable';
import UsersForm from './UsersForm';

import './styles.css';

const UsersView = () => {
  const [users, setUsers] = useState<Users[]>([]);

  const getUsers = () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/user',
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setUsers(response.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleInsertUsers = (user: Users) => {
    const clone = [...users];
    clone.push(user);
    setUsers(clone);
  };
  return (
    <>
      <div className="users-view-container">
        <UsersForm onInsertUser={handleInsertUsers} />
        <UsersTable user={users} onDelete={getUsers} />
      </div>
    </>
  );
};

export default UsersView;
