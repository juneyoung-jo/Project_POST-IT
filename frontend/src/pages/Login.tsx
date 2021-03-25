import { Wrapper, TitleWrapper, ButtonWrapper } from './Login.styles';
import {
  GOOGLE_AUTH_URL,
  GITHUB_AUTH_URL,
  NAVER_AUTH_URL,
} from '../config/config';
import naver from 'assets/images/naver.png';
import google from 'assets/images/google.png';
import github from 'assets/images/github2.png';

function Login() {
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>로그인</h1>
        <p>로그인을 통해 딱 맞는 IT 트렌드 분석 결과를 확인하세요.</p>
      </TitleWrapper>
      <ButtonWrapper>
        <a href={GOOGLE_AUTH_URL}>
          <button
            onClick={() => {
              console.log(GOOGLE_AUTH_URL);
            }}
          >
            <img src={google} alt="Google" /> Log in with Google
          </button>
        </a>
        {/* <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
        <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a> */}
        <a href={GITHUB_AUTH_URL}>
          <img src={github} alt="Github" /> Log in with Github
        </a>
        <a href={NAVER_AUTH_URL}>
          <img src={naver} alt="Naver" /> Log in with Naver
        </a>
        {/* <GoogleLogin
          render={(props: any) => (
            <Button onClick={props.onClick} style={{ background: '#fff' }}>
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
        </Button> */}
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Login;
