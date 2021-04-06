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
        <p>로그인을 통해 IT 트렌드 분석 결과를 확인하세요.</p>
      </TitleWrapper>
      <ButtonWrapper>
        <a href={GOOGLE_AUTH_URL} className="btn google">
          <img src={google} alt="Google" />
          <span>Google</span>
        </a>
        <a
          href={GITHUB_AUTH_URL}
          className="btn github"
          style={{ background: '#232d2e', color: '#f2f2f2' }}
        >
          <img src={github} alt="Github" />
          <span>Github</span>
        </a>
        <a href={NAVER_AUTH_URL} className="btn naver">
          <img src={naver} alt="naver" />
          <span>Naver</span>
        </a>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Login;
