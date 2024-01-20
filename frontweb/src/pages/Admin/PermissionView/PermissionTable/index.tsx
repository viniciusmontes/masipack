import { Permission } from 'types/permission';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';

import './styles.css';

type Props = {
  permission: Permission[];
  onDelete: Function;
  onEdit: (permission: Permission) => void;
};

const PermissionTable = ({ permission, onDelete, onEdit }: Props) => {
  const handleDelete = (accessKey: string) => {
    if (!window.confirm('Tem certeza que deseja deletar ?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/permission/${accessKey}`,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="permission-table-container">
      <table className="table table-striped permission-table">
        <thead>
          <tr className="permission-table-header">
            <th>Código</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {permission.map((permission) => (
            <tr key={permission.code}>
              <td>{permission.code}</td>
              <td>{permission.description}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => onEdit(permission)}>Editar</button>
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => handleDelete(permission.accessKey as string)}
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

export default PermissionTable;
