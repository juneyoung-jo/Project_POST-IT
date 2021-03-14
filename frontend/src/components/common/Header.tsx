import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  top: 0;
  display: flex;
  position: sticky;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  background-color: #2c2c2c;
  z-index: 100;
  a {
    font-size: 16px;
    padding: 0 1rem;
    color: #c2c2c2;
    &:hover {
      transition: all 0.1s ease-in-out;
      color: #f2f2f2;
    }
  }
`;

const LoginButton = styled.button`
  font-size: 14px;
  background-color: inherit;
  color: #c2c2c2;
  border: none;
  &:hover {
    transition: all 0.1s ease-in-out;
    color: #f2f2f2;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">LOGO</Link>
      <Link to="/login">
        <LoginButton>로그인을 통해 딱 맞는 분석결과를 확인하세요</LoginButton>
      </Link>
    </Wrapper>
  );
};

export default Header;
