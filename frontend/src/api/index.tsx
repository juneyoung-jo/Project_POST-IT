import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://j4c103.p.ssafy.io:5555/api/report',
  headers: {
    'Content-type': 'application/json',
  },
});

//request처리
instance.interceptors.request.use(
  function (config) {
    // config.withCredentials = true; // cors
    return config;
  },
  // 오류 발생시에는 오류 내용을 출력하고 요청이 거절되도록 설정
  function (error) {
    return Promise.reject(error);
  },
);

// response처리
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    if (error.response.status == '401') {
      alert('로그인 만료');
    } else if (error.response.status == '403') {
      // 토큰이 있으면 권한이 없으면
      // 토큰이 없으면 로그인 필요
      console.log('권한 x or 로그인 필요');
    } else {
      console.log(error);
    }
  },
);
