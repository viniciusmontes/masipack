import { requestBackendLogin } from 'util/requests';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';
import { useContext, useState } from 'react';
import { getTokenData } from 'util/auth';
import { AuthContext } from 'AuthContext';
import { saveAuthData } from 'util/storage';

import './styles.css';




type FormData = {
  login: string;
  password: string;
};

type LocationState = {
  from: string;
};

const Login = () => {
  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: '/admin' } };

  const [hasError, setHasError] = useState(false);

  const { setAuthContextData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const history = useHistory();
  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        history.replace(from);
      })
      .catch((error) => {
        setHasError(true);
        console.log('erro', error);
      });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">Erro ao tentar efetuar o login</div>
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
          <button className="btn btn-primary btn-icon">Fazer Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
