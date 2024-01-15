import axios, { AxiosRequestConfig } from 'axios';


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
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBUEkgQVRNIiwic3ViIjoiYWRtaW4iLCJleHAiOjE3MDUzNDM3MzR9.XeuSoBS_9iOqeuGAtCec7N44YP3Zo9EP-9DLNdMh9YY',
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
};
