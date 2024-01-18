import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { requestBackend } from 'util/requests';

import './styles.css';

type PermissionGroup = {
  accessKey: string;
  code: string;
  description: string;
  enableAd: boolean;
  passwordQtyDaysExpiration: 0;
  passwordContainsNumber: boolean;
  passwordContainsLetterUpperCase: boolean;
  passwordContainsLetterLowerCase: boolean;
  passwordContainsSpecialKey: boolean;
  passwordQtyMinKeys: 0;
  passwordQtyOldNotUse: 0;
  sessionTimeOut: 0;
};

const PermissionGroupTable = () => {
  const [permissionGroup, setPermissionGroup] = useState<PermissionGroup[]>([]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/permission-group',
      withCredentials: true,
    };

    requestBackend(params)
      .then((response) => {
        setPermissionGroup(response.data);
      })
      .catch((error) => {
        console.log('DEU ERRO', error);
      });
  }, []);

  return (
    <div className="permission-group-table-container">
      <table className="table table-striped">
        <thead>
          <tr className="permission-group-table-header">
            <th>Código</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {permissionGroup.map((group) => (
            <tr key={group.code}>
              <td>{group.code}</td>
              <td>{group.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionGroupTable;
