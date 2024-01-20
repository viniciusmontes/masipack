import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { SecurityPolicy } from 'types/securitypolicy';
import { useForm } from 'react-hook-form';

import './styles.css';

type FormData = {
  code: string;
  description: string;
  enableAd: boolean;
  passwordQtyDaysExpiration: number;
  passwordContainsNumber: boolean;
  passwordContainsLetterUpperCase: boolean;
  passwordContainsLetterLowerCase: boolean;
  passwordContainsSpecialKey: boolean;
  passwordQtyMinKeys: number;
  passwordQtyOldNotUse: number;
  sessionTimeOut: number;
};

type Props = {
  onInsertSecurityPolicy: (securityPolicy: SecurityPolicy) => void;
};

const SecurityPolicyForm = ({ onInsertSecurityPolicy }: Props) => {
  const { register, handleSubmit, setValue, reset } = useForm<FormData>();

  const onSubmit = (formdata: FormData) => {
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/security-policy',
      data: formdata,
      withCredentials: true,
    };

    requestBackend(params)
      .then((response) => {
        reset();

        onInsertSecurityPolicy(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleButtonCancel = (event: React.MouseEvent) => {
    event.preventDefault();
    setValue('code', '');
    setValue('description', '');
    setValue('enableAd', true);
    setValue('passwordQtyDaysExpiration', 0);
    setValue('passwordContainsNumber', true);
    setValue('passwordContainsLetterUpperCase', true);
    setValue('passwordContainsLetterLowerCase', true);
    setValue('passwordQtyMinKeys', 0);
    setValue('passwordContainsSpecialKey', true);
    setValue('passwordQtyMinKeys', 0);
    setValue('passwordQtyOldNotUse', 0);
    setValue('sessionTimeOut', 0);
  };

  return (
    <>
      <div className="security-policy-crud-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="security-policy-title-container">
            Politica de Segurança
          </h1>
          <div className="security-policy-inputs-container">
            <label>Código</label>
            <input {...register('code')} name="code" type="text" />
            <label>Descrição</label>
            <input
              {...register('description')}
              name="description"
              type="text"
            />
            <label>Integracção com AD</label>
            <select
              {...register('enableAd')}
              name="enableAd"
              defaultValue="true" //
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>

            <label>Expiração da senha</label>
            <input
              {...register('passwordQtyDaysExpiration')}
              name="passwordQtyDaysExpiration"
              type="text"
            />
            <label>Contem números ?</label>
            <select
              {...register('passwordContainsNumber')}
              name="passwordContainsNumber"
              defaultValue="true"
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
            <label>Letras maiúsculas</label>
            <select
              {...register('passwordContainsLetterUpperCase')}
              name="passwordContainsLetterUpperCase"
              defaultValue="true"
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
            <label>Contem letras minúsculas</label>
            <select
              {...register('passwordContainsLetterLowerCase')}
              name="passwordContainsLetterLowerCase"
              defaultValue="true"
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
            <label>Caracteres especiais</label>
            <select
              {...register('passwordContainsSpecialKey')}
              name="passwordContainsSpecialKey"
              defaultValue="true"
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
            <label>Caracteres minimos</label>
            <input
              {...register('passwordQtyMinKeys')}
              name="passwordQtyMinKeys"
              type="text"
            />
            <label>Senhas antigas</label>
            <input
              {...register('passwordQtyOldNotUse')}
              name="passwordQtyOldNotUse"
              type="text"
            />
            <label>Tempo de sessão</label>
            <input
              {...register('sessionTimeOut')}
              name="sessionTimeOut"
              type="text"
            />
          </div>
          <div className="security-policy-form-buttons-container">
            <button className="btn btn-primary">SALVAR</button>
            <button className="btn btn-primary" onClick={handleButtonCancel}>
              CANCELAR
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SecurityPolicyForm;
