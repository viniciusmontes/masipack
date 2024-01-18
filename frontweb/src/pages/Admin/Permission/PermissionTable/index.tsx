import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { Permission } from 'types/permission';

import './styles.css';

const PermissionTable = () => {
  const [permissions, setPermissions] = useState<Permission[]>([]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/permission',
      withCredentials: true,
    };

    requestBackend(params)
      .then((response) => {
        setPermissions(response.data);
      })
      .catch((error) => {
        console.log('DEU ERRO', error);
      });
  }, []);

  return (
    <div className="permission-table-container">
      <table className="table table-striped">
        <thead>
          <tr className="permission-table-header">
            <th>Código</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.code}>
              <td>{permission.code}</td>
              <td>{permission.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionTable;
