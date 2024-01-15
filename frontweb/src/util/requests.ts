import axios, { AxiosRequestConfig } from 'axios';
import { getAuthData } from './storage';


export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? 'http://142.171.135.63:8088/v1';

type LoginData = {
  login: string;
  password: string;
};

export const requestBackendLogin = (loginData: LoginData) => {
  
    return axios({
    method: 'POST',
    baseURL: BASE_URL,
    url: '/login',
    data: loginData,
  });
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization:
          'Bearer ' + getAuthData().access_token,
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
};
