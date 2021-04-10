import styled from 'styled-components';

// TextStyle에서 여러개의 props를 받기 위해 각 변수의 타입을 정해주는 interface 선언
interface TextStyle {
  fontSize: string;
  fontWeight: string;
  textAlign?: string;
  marginTop?: string;
}

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  xl: customMediaQuery(1920),
  lg: customMediaQuery(1280),
  md: customMediaQuery(960),
  sm: customMediaQuery(600),
};

export const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .go-report {
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    font-size: 1.3em;
    &:hover {
      color: #a9a9a9;
    }
  }

  // 모바일 버전일 경우 글과 사진 거꾸로 배치
  .mobile-reverse {
    ${media.sm} {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;

export const TextStyle = styled.div<TextStyle>`
  font-size: ${(props) => props.fontSize};

  // textAlign 값을 props 받지 못했다면 'center'를 적용
  text-align: ${(props) => props.textAlign || 'center'};
  font-weight: ${(props) => props.fontWeight};

  // marginTop 값을 props 받지 못했다면 '0px' 적용
  margin-top: ${(props) => props.marginTop || '0px'};
  color: #fff;
  line-height: 1.3; // 줄높이가 글자높이의 1.3배

  ${media.sm} {
    text-align: center;
    word-break: keep-all; // 단어 기준으로 줄바꿈
  }
`;

export const Img = styled.img<{ hide?: string }>`
  width: 100%;
  height: 100%;

  ${media.sm} {
    // 모바일 버전에선 그림 3개 중에 1개만 나오게 하기 & 마진 조정
    display: ${(props) => props.hide};
    margin-top: 10px;
  }
`;
