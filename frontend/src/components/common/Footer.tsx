import styled from 'styled-components';

const Wrapper = styled.footer`
  bottom: 0;
  display: flex;
  position: relative;
  width: 100%;
  height: 48px;
  justify-content: flex-end;
  align-items: center;
  background-color: #2c2c2c;
  z-index: 100;
  color: #f2f2f2;
`;

const Context = {};

const Footer = () => {
  return (
    <Wrapper>
      <small>Footer</small>
    </Wrapper>
  );
};

export default Footer;
