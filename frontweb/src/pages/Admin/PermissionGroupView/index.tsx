import { PermissionGroup } from 'types/permissiongroup';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import PermissionGroupForm from './PermissionGroupForm';
import PermissionGroupTable from './PermissionGroupTable';

import './styles.css';

const PermissionGroupView = () => {
  const [permissionsGroup, setPermissionGroup] = useState<PermissionGroup[]>(
    []
  );

  const [selectedPermissionGroup, setSelectedPermissionGroup] =
    useState<PermissionGroup | null>(null);

  const getPermissionGroup = () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/permission-group',
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setPermissionGroup(response.data);
    });
  };

  useEffect(() => {
    getPermissionGroup();
  }, []);

  const handleInsertPermissionGroup = (permissionGroup: PermissionGroup) => {
    const clone = [...permissionsGroup];
    clone.push(permissionGroup);
    setPermissionGroup(clone);
  };

  const handleEditingPermissionGroup = (
    editedPermissionGroup: PermissionGroup
  ) => {
    const updatedPermissionsGroup = [...permissionsGroup];

    const index = updatedPermissionsGroup.findIndex(
      (p) => p.accessKey === editedPermissionGroup.accessKey
    );

    if (index !== -1) {
      updatedPermissionsGroup[index] = editedPermissionGroup;

      setPermissionGroup(updatedPermissionsGroup);
    }

    setSelectedPermissionGroup(null);
  };

  const handleSelectedPermissionGroup = (permissionGroup: PermissionGroup) => {
    setSelectedPermissionGroup(permissionGroup);
  };

  return (
    <div className="permission-group-view">
      <PermissionGroupForm
        onInsertPermissionGroup={handleInsertPermissionGroup}
        onEditingPermissionGroup={handleEditingPermissionGroup}
        selectedPermissionGroup={selectedPermissionGroup}
      />
      <PermissionGroupTable
        permissionGroup={permissionsGroup}
        onDelete={getPermissionGroup}
        onEdit={handleSelectedPermissionGroup}
      />
    </div>
  );
};

export default PermissionGroupView;
