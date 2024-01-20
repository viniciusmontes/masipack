import { useForm } from 'react-hook-form';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { Permission } from 'types/permission';
import { useEffect } from 'react';

import './styles.css';

type Props = {
  onInsertPermission: (permission: Permission) => void;
  selectedPermission: Permission | null;
};

type FormData = {
  code: string;
  description: string;
};

const PermissionForm = ({ onInsertPermission, selectedPermission }: Props) => {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  useEffect(() => {
    if (selectedPermission) {
      setValue('code', selectedPermission.code);
      setValue('description', selectedPermission.description);
    }
  }, [selectedPermission, setValue]);

  const onSubmit = (formdata: FormData) => {
    const params: AxiosRequestConfig = {
      method: selectedPermission ? 'PUT' : 'POST',
      url: selectedPermission
        ? `/permission/${selectedPermission.accessKey}`
        : '/permission',
      data: formdata,
      withCredentials: true,
    };

    requestBackend(params)
      .then((response) => {
        setValue('code', '');
        setValue('description', '');
        onInsertPermission(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleButtonCancel = (event: React.MouseEvent) => {
    event.preventDefault();
    setValue('code', '');
    setValue('description', '');
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
            className="base-input form-control"
          />

          <div className="permissions-crud-inputs-label-right">
            <label>Descrição:</label>
          </div>

          <input
            {...register('description')}
            type="text"
            name="description"
            className="base-input form-control"
          />
          <div className="permissions-crud-container-buttons">
            <button className="btn btn-primary">SALVAR</button>
            <button className="btn btn-primary" onClick={handleButtonCancel}>
              CANCELAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PermissionForm;
