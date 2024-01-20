import { useEffect, useState } from 'react';
import { Permission } from 'types/permission';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import PermissionForm from './PermissionForm';
import PermissionTable from './PermissionTable';

import './styles.css';

const PermissionView = () => {
  const [permissions, setPermissions] = useState<Permission[]>([]);

  const [selectedPermission, setSelectedPermission] =
    useState<Permission | null>(null);

  const getPermissions = () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/permission',
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setPermissions(response.data);
    });
  };

  useEffect(() => {
    getPermissions();
  }, []);

  const handleInsertPermission = (permission: Permission) => {
    const clone = [...permissions];
    clone.push(permission);
    setPermissions(clone);
  };

  const handleEditingPermission = (permission: Permission) => {
    const updatedPermissions = permissions.map((p) =>
      p.accessKey === permission.accessKey ? permission : p
    );

    setPermissions(updatedPermissions);
  };

  const handleSelectedPermission = (permission: Permission) => {
    setSelectedPermission(permission);
  };

  return (
    <div className="permission-view-container">
      <PermissionForm
        onInsertPermission={handleInsertPermission}
        selectedPermission={selectedPermission}
      />
      <PermissionTable
        permission={permissions}
        onDelete={getPermissions}
        onEdit={handleSelectedPermission}
      />
    </div>
  );
};

export default PermissionView;
