import ReactDOM from 'react-dom';
import App from 'App';
import { RecoilRoot, selector, atom, useRecoilValue } from 'recoil';
import axios from 'axios';
import React from 'react';
import { REFRESH_TOKEN } from 'config/config';
import { CircularProgress } from '@material-ui/core';

export const getTokenTrigger = atom({
  key: 'getTokenTrigger', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const toggleState = atom({
  key: 'toggleState',
  default: false,
});

export const tokenState = selector({
  key: 'tokenState',
  get: async ({ get }) => {
    get(getTokenTrigger); // 트리거의 상태를 구독해서 트리거 값이 변경될 때마다 새로 계산
    // console.log(localStorage.getItem('dumy'));
    if (localStorage.getItem('isLogin') == '1') {
      const response = await axios.get(REFRESH_TOKEN, {
        withCredentials: true,
      });
      return response.data.data;
    }
    return null;
  },
  set: ({ set }) => {
    // setter가 호출되면 트리거의 값을 1만큼 증가
    // => 트리거 값 변경으로 인해 tokenState 갱신됨
    set(getTokenTrigger, (v) => v + 1);
  },
});

ReactDOM.render(
  <RecoilRoot>
    <React.Suspense
      fallback={
        <div
          style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#2d2839',
          }}
        >
          <CircularProgress />
        </div>
      }
    >
      <App />
    </React.Suspense>
  </RecoilRoot>,
  document.getElementById('root'),
);
