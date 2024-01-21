import { PermissionGroup } from 'types/permissiongroup';

import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';

type Props = {
  permissionGroup: PermissionGroup[];
  onDelete: Function;
  onEdit: (permissionGroup: PermissionGroup) => void;
};

const PermissionGroupTable = ({ permissionGroup, onDelete, onEdit }: Props) => {
  const handleDelete = (accessKey: string) => {
    if (!window.confirm('Tem certeza que deseja deletar ?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/permission-group/${accessKey}`,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="permission-group-table-container">
      <table className="table table-striped permission-group-table">
        <thead>
          <tr className="permission-group-table-header">
            <th>Código</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {permissionGroup.map((permissionGroup) => (
            <tr key={permissionGroup.code}>
              <td>{permissionGroup.code}</td>
              <td>{permissionGroup.description}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm btn-table-editar"
                  onClick={() => onEdit(permissionGroup)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm ml-2 btn-table-excluir"
                  onClick={() =>
                    handleDelete(permissionGroup.accessKey as string)
                  }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionGroupTable;
