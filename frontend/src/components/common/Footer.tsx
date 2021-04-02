import styled from 'styled-components';

const Wrapper = styled.footer`
  left: 0;
  bottom: 0;
  position: relative;
  display: flex;
  /* position: fixed; */
  width: 100%;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.first};
  z-index: 100;
  /* color: #f2f2f2; */
`;

const Text = styled.div`
  line-height: 1.5;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.text.second};
`;

const Line = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.text.second};
  width: 70%;
  height: 30px;
`;

const Context = {};

const Footer = () => {
  return (
    <Wrapper>
      <Line></Line>
      <Text>Samsung SW Academy For Youth</Text>
      <Text>김소정 오수완 이승준 조준영 한재희</Text>
    </Wrapper>
  );
};

export default Footer;
