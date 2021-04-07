import { API_BASE_URL, ACCESS_TOKEN } from 'config/config';
import { tokenState } from 'index';

const request = (options: any) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    }),
  );
};

export function setCurrentUser(user: any) {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject('No access token set.');
  }

  return request({
    url: API_BASE_URL + '/user/me',
    method: 'post',
    body: JSON.stringify(user),
  });
}

export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject('No access token set.');
  }

  return request({
    url: API_BASE_URL + '/user/me',
    method: 'GET',
  });
}

// export function createInstance() {
//   const config: AxiosRequestConfig = {
//     baseURL: API_BASE_URL,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   const instance: AxiosInstance = axios.create(config);
//   return instance;
// }
