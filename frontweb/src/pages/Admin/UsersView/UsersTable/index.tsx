import { Users } from 'util/users';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';

type Props = {
  user: Users[];
  onDelete: Function;
};

const UsersTable = ({ user, onDelete }: Props) => {
  const handleDelete = (accessKey: string) => {
    if (!window.confirm('Tem certeza que deseja deletar ?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/user/${accessKey}`,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        onDelete();
      })
      .catch((error) => {
        console.error('Erro ao deletar usuário:', error);
      });
  };

  const renderEnableAd = (enableAd: boolean) => {
    return enableAd ? 'SIM' : 'NÃO';
  };

  return (
    <div className="user-table-container">
      <table className="table table-striped user-table">
        <thead>
          <tr className="user-table-header">
            <th>Login</th>
            <th>Email</th>
            <th>Ativo</th>
            <th>Primeiro acesso</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.login}>
              <td>{user.login}</td>
              <td>{user.email}</td>
              <td>{renderEnableAd(user.active)}</td>
              <td>{renderEnableAd(user.firstAccess)}</td>
              <td>
                <button className="btn btn-warning btn-sm btn-table-editar">Editar</button>
                <button
                  className="btn btn-danger btn-sm ml-2 btn-table-excluir"
                  onClick={() => handleDelete(user.accessKey as string)}
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

export default UsersTable;
