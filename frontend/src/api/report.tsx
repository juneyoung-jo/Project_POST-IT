import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://j4c103.p.ssafy.io:8000',
  headers: {
    'Content-type': 'application/json',
  },
});
export function getReport() {
  return instance.get('/report/common');
}
