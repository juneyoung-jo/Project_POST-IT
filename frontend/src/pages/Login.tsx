import React from 'react';

// lib
import GoogleLogin from 'react-google-login';
import Axios from 'axios';

// styles
import { Wrapper, TitleWrapper, ButtonWrapper } from './Login.styles';
import { Button } from '@material-ui/core';
import naver from 'assets/images/naver.png';
import google from 'assets/images/google.png';
import github from 'assets/images/github2.png';

const config = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
};

const responseGoogle = async (response: any) => {
  console.log(1, response);
  let jwtToken = await Axios.post(
    'http://j4c102.p.ssafy.io:5555/oauth/jwt/google',
    JSON.stringify(response),
    config,
  );
  if (jwtToken.status === 200) {
    console.log(2, jwtToken.data);
    localStorage.setItem('jwtToken', jwtToken.data);
  }
};
function Login() {
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>로그인</h1>
        <p>로그인을 통해 딱 맞는 IT 트렌드 분석 결과를 확인하세요.</p>
      </TitleWrapper>
      <ButtonWrapper>
        <GoogleLogin
          render={(renderProps) => (
            <Button
              onClick={renderProps.onClick}
              style={{ background: '#fff' }}
            >
              <img src={google} alt="github image" />
              <span>Google</span>
            </Button>
          )}
          icon={false}
          // react-app-env.d.ts 에서 타입 설정해줘야 함
          clientId={process.env.REACT_APP_GOOGLE}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <Button style={{ background: '#232d2e', color: '#f2f2f2' }}>
          <img src={github} alt="github image" />
          <span>Github</span>
        </Button>
        <Button
          style={{
            background: '#19ce60',
            border: '1px solid #15c654',
            color: '#f2f2f2',
          }}
        >
          <img src={naver} alt="github image" />
          <span>Naver</span>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Login;
