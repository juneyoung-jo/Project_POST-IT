/// <reference types="react-scripts" />

// REACT_APP의 환경변수에 타입을 지정하기 위한 파일입니다.
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_GOOGLE: string;
  }
}
