import { API_BASE_URL } from 'config/config';
import axios from 'axios';

export function setCurrentUser(user: any, token: string) {
  if (!token) {
    return Promise.reject('No access token set.');
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  };

  return axios.post(API_BASE_URL + '/user/me', JSON.stringify(user), {
    headers,
  });
}
