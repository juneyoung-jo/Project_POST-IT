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
    color: ${({ theme }) => theme.colors.text.first};
    margin: 1rem auto;
  }
`;

export const ButtonWrapper = styled.div`
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
      width: 18px;
      height: 18px;
    }
  }
  button:hover {
    transform: scale(1.02);
    transition: 0.2s all;
  }
`;
