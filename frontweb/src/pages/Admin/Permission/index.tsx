import { useForm } from 'react-hook-form';
import PermissionTable from './PermissionTable';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';

import './styles.css';

type FormData = {
  code: string;
  description: string;
};

const Permission = () => {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onSubmit = (formdata: FormData) => {
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/permission',
      data: formdata,
      withCredentials: true,
    };

    requestBackend(params)
      .then((response) => {
        setValue('code', '');
        setValue('description', '');
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="permissions-crud-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="permissions-title">Permissões</h1>

        <div className="permissions-crud-inputs-container">
          <label>Código:</label>
          <input
            {...register('code')}
            type="text"
            name="code"
            className="base-input"
          />
          <div className="permissions-crud-inputs-label-right">
            <label>Descrição:</label>
          </div>

          <input
            {...register('description')}
            type="text"
            name="description"
            className="base-input"
          />
          <div className="permissions-crud-container-buttons">
            <button className="btn btn-primary">SALVAR</button>
            <button className="btn btn-primary">CANCELAR</button>
          </div>
        </div>
      </form>

      <PermissionTable />
    </div>
  );
};

export default Permission;
