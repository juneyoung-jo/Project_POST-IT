import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Circular Std', 'Noto Sans KR', 'Open Sans', sans-serif;
  position: relative;
  width: 100%;
  height: 100%;
  margin: -20px 0 0;
  padding: 100px 0 0;
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.text.first};
  width: 100%;
  margin-bottom: 1rem;
`;
const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text.second};
  width: 100%;
  margin-bottom: 2rem;
`;

const CategorySelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Section = styled.div`
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.second};
`;

export { Wrapper, Title, Subtitle, CategorySelect, Section };
