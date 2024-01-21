import { useForm } from 'react-hook-form';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { Users } from 'util/users';

import './styles.css';

type Props = {
  onInsertUser: (permission: Users) => void;
};

type FormData = {
  login: string;
  password: string;
  email: string;
  active: boolean;
};

const UsersForm = ({ onInsertUser }: Props) => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (formdata: FormData) => {
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/user',
      data: formdata,
      withCredentials: true,
    };

    requestBackend(params)
      .then((response) => {
        reset();
        onInsertUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="users-form-crud-container">
      <h1 className="users-form-crud-title">Usuários</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="users-form-crud-inputs-container">
          <label>Login</label>
          <input
            {...register('login')}
            name="login"
            type="text"
            className="base-input"
          />
          <label>Email</label>
          <input
            {...register('email')}
            name="email"
            type="text"
            className="base-input"
          />
          <label>Senha</label>
          <input
            {...register('password')}
            name="password"
            type="text"
            className="base-input"
          />
          <div className="users-form-crud-select-container">
            <label>Ativo</label>
            <select
              {...register('active')}
              name="active"
              defaultValue="true"
              className="base-input"
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </div>

          <div className="users-form-crud-container-buttons">
            <button className="btn btn-primary">SALVAR</button>
            <button className="btn btn-primary">CANCELAR</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UsersForm;
