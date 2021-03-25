import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Modal } from './Modal';

import Login from 'pages/Login';

const Wrapper = styled.header`
  font-family: 'Circular Std', 'Noto Sans KR', 'Open Sans', sans-serif;
  top: 0;
  display: flex;
  position: sticky;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.second};
  z-index: 100;
  .header-logo {
    margin: auto 1rem;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text.first};
  }
  .header-menus {
    font-size: 14px;
    font-weight: 700;
    padding: 0 1rem;
    color: ${({ theme }) => theme.colors.text.third};
    &:hover {
      transition: all 0.1s ease-in-out;
      color: ${({ theme }) => theme.colors.text.first};
    }
  }
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  margin: auto 1rem;
  padding-top: 5px;
  color: ${({ theme }) => theme.colors.text.second};
  &:hover {
    color: ${({ theme }) => theme.colors.text.first};
  }
`;

function Header() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Wrapper>
      <div>
        <Link className="header-logo" to="/">
          POST-IT
        </Link>
        <Link className="header-menus" to="/contents">
          일일 컨텐츠
        </Link>
        <Link className="header-menus" to="/myfolder">
          내 스크랩
        </Link>
        <Link className="header-menus" to="/fullpage">
          FullPage
        </Link>
      </div>
      <div>
        <LoginButton onClick={openModal}>
          <span>로그인</span>
        </LoginButton>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        children={<Login />}
      ></Modal>
    </Wrapper>
  );
}

export default Header;
