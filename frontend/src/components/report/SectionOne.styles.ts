import styled from 'styled-components';

export const Top10Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  span:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text.second};
    margin: 8px 0;
    &:hover {
      color: ${({ theme }) => theme.colors.text.first};
      transition: 0.2s all;
    }
  }
  span:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text.third};
  }
`;

export const Top10Votes = styled.div`
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.mint};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  span:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
  span:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;
export const RateInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    span:nth-child(1) {
      font-size: ${({ theme }) => theme.fontSizes.xs};
      margin-bottom: 4px;
    }
    span:nth-child(2) {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      margin-bottom: 8px;
    }
  }
`;
