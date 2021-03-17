import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// .env 파일의 변수명은 무조건 `REACT_APP_`으로 생성해야합니다.

export function createInstance() {
  const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const instance: AxiosInstance = axios.create(config);
  return instance;
}

export function createFileInstance() {
  const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  const instance: AxiosInstance = axios.create(config);
}
