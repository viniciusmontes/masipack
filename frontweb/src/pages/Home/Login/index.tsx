import { requestBackendLogin } from 'util/requests';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import './styles.css';
import { useHistory } from 'react-router-dom';

type FormData = {
  login: string;
  password: string;
};

const Login = () => {
  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        console.log(response.data);
        setHasError(false);
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERRO', error);
      });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">
          Erro ao tentar efetuar o login
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('login', {
              required: 'Campo obrigatório',
            })}
            type="text"
            className={`form-control base-input ${
              errors.login ? 'is-invalid' : ''
            }`}
            placeholder="Email"
            name="login"
          />
          <div className="invalid-feedback d-block">
            {errors.login?.message}
          </div>
        </div>
        <div className="mb-2">
          <input
            {...register('password', { required: 'Campo obrigatório' })}
            type="password"
            className={`form-control base-input ${
              errors.password ? 'is-invalid' : ''
            }`}
            placeholder="Password"
            name="password"
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>
        <div className="login-submit">
          <button className='btn btn-primary btn-icon'>Fazer Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
