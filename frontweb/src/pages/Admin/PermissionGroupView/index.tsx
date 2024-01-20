import { PermissionGroup } from 'types/permissiongroup';
import './styles.css';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import PermissionGroupForm from './PermissionGroupForm';
import PermissionGroupTable from './PermissionGroupTable';

const PermissionGroupView = () => {
  const [permissionsGroup, setPermissionGroup] = useState<PermissionGroup[]>(
    []
  );

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

  const handleInsertPermissionGroup = (permissionGroup: PermissionGroup) => {
    const clone = [...permissionsGroup];
    clone.push(permissionGroup);
    setPermissionGroup(clone);
  };

  useEffect(() => {
    getPermissionGroup();
  }, []);

  return (
    <div className="permission-group-view">
      <PermissionGroupForm
        onInsertPermissionGroup={handleInsertPermissionGroup}
      />
      <PermissionGroupTable
        permissionGroup={permissionsGroup}
        onDelete={getPermissionGroup}
      />
    </div>
  );
};

export default PermissionGroupView;
