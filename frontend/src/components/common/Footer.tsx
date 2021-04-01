import styled from 'styled-components';

const Wrapper = styled.footer`
  left: 0;
  bottom: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 10rem;
  z-index: 100;
  background-color: #16141c;
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
