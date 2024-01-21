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

  const handleEditingPermission = (editedPermission: Permission) => {
    const updatedPermissions = [...permissions];

    const index = updatedPermissions.findIndex(
      (p) => p.accessKey === editedPermission.accessKey
    );

    if (index !== -1) {
      updatedPermissions[index] = editedPermission;

      setPermissions(updatedPermissions);
    }

    setSelectedPermission(null);
  };

  const handleSelectedPermission = (permission: Permission) => {
    setSelectedPermission(permission);
  };

  return (
    <div className="permission-view-container">
      <PermissionForm
        onInsertPermission={handleInsertPermission}
        onEditingPermission={handleEditingPermission}
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
