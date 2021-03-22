import styled from 'styled-components';
import { Button } from '@material-ui/core';
import naver from 'assets/images/naver.png';
import google from 'assets/images/google.png';
import github from 'assets/images/github2.png';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1.5fr; // 그리드 행의 크기 비율
  height: 100%;
  font-family: 'Circular Std', 'Noto Sans KR', sans-serif;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 1rem auto;
    font-size: ${({ theme }) => theme.fontSizes.title};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.first};
  }
  p {
    color: ${({ theme }) => theme.colors.text.first};
    margin: 1rem auto;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    box-sizing: border-box;
    width: 240px;
    height: 48px;
    margin: 8px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    font-family: 'Circular Std', sans-serif;
    border-radius: 16px;
    & img {
      position: absolute;
      left: 1.5rem;
      width: 20px;
      height: 20px;
    }
  }
  button:hover {
    transform: scale(1.02);
    transition: 0.2s all;
  }
`;

function Login() {
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>로그인</h1>
        <p>로그인을 통해 딱 맞는 IT 트렌드 분석 결과를 확인하세요.</p>
      </TitleWrapper>
      <ButtonWrapper>
        <Button style={{ background: '#f2f2f2' }}>
          <img src={google} alt="github image" />
          <span>Google</span>
        </Button>
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
