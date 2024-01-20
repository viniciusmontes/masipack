import { PermissionGroup } from 'types/permissiongroup';
import { useForm } from 'react-hook-form';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';

import './styles.css';

type Props = {
  onInsertPermissionGroup: (permissionGroup: PermissionGroup) => void;
};

type FormData = {
  code: string;
  description: string;
};

const PermissionGroupForm = ({ onInsertPermissionGroup }: Props) => {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onSubmit = (formdata: FormData) => {
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/permission-group',
      data: formdata,
      withCredentials: true,
    };

    requestBackend(params)
      .then((response) => {
        setValue('code', '');
        setValue('description', '');
        onInsertPermissionGroup(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleButtonCancel = (event : React.MouseEvent) => {
    event.preventDefault()
    setValue('code', '');
    setValue('description', '');
  };

  return (
    <>
      <div className="permission-group-crud-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="permission-group-crud-title">Grupo de Permissões</h1>
          <div className="permission-group-crud-inputs-container">
            <label>Código:</label>
            <input
              {...register('code')}
              type="text"
              name="code"
              className="base-input"
            />
            <div className="permission-group-crud-inputs-label-right">
              <label>Descrição:</label>
              <input
                {...register('description')}
                type="text"
                name="description"
                className="base-input"
              />
            </div>
            <div className="permission-group-crud-buttons-container">
              <button className="btn btn-primary">SALVAR</button>
              <button className="btn btn-primary" onClick={handleButtonCancel}>CANCELAR</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PermissionGroupForm;
