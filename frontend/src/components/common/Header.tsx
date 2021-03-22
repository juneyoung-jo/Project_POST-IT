import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
  .logo {
    margin: auto 1rem;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text.first};
  }
  span {
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
        <Link className="logo" to="/">
          POST-IT
        </Link>
        <Link to="/contents">
          <span>일일 컨텐츠</span>
        </Link>
        <Link to="/myfolder">
          <span>내 스크랩</span>
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
