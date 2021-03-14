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

const Header = () => {
  return (
    <Wrapper>
      <div>
        <Link to="/">LOGO</Link>
        <Link to="/">일일 컨텐츠</Link>
        <Link to="/">내 스크랩</Link>
      </div>
      <div>
        <Link to="/signup">회원가입</Link>
        <Link to="/login">로그인</Link>
      </div>
    </Wrapper>
  );
};

export default Header;
