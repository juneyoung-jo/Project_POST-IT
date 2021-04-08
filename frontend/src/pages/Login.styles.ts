import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1.5fr; // 그리드 행의 크기 비율
  height: 100%;
  font-family: 'Circular Std', 'Noto Sans KR', sans-serif;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
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
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text.first};
    margin: 1rem auto;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    margin: 8px auto;
    padding: 0 1rem;
    width: 240px;
    height: 48px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    font-family: 'Circular Std', 'Noto Sans KR', sans-serif;
    border-radius: 16px;
    color: ${({ theme }) => theme.colors.text.first};
    img {
      position: relative;
      left: 1.5rem;
      width: 18px;
      height: 18px;
    }
    span {
      width: inherit;
      text-align: center;
    }
  }
  .btn.google {
    background-color: #fff;
    color: #2e2e2e;
  }
  .btn.naver {
    background-color: #19ce60;
    border: 1px solid #15c654;
  }
  .btn.github {
    background-color: #232d2e;
  }
  a:hover {
    transform: scale(1.02);
    transition: 0.2s all;
  }
`;
