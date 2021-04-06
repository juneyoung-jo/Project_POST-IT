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

// const request = (options: any) => {
//   const headers = new Headers({
//     'Content-Type': 'application/json',
//   });

//   if (localStorage.getItem(ACCESS_TOKEN)) {
//     headers.append(
//       'Authorization',
//       'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
//     );
//   }

//   const defaults = { headers: headers };
//   options = Object.assign({}, defaults, options);

//   return fetch(options.url, options).then((response) =>
//     response.json().then((json) => {
//       if (!response.ok) {
//         return Promise.reject(json);
//       }
//       return json;
//     }),
//   );
// };

// export function getReport() {
//   if (!localStorage.getItem(ACCESS_TOKEN)) {
//     return Promise.reject('No access token set.');
//   }

//   return request({
//     url: 'http://localhost:8000/report/common',
//     method: 'GET',
//   });
// }
