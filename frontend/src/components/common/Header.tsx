import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Modal } from './Modal';

import Login from 'pages/Login';

const Wrapper = styled.header`
  font-family: 'Noto Sans KR', 'OpenSans', sans-serif;
  top: 0;
  display: flex;
  position: sticky;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.second};
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

function Header() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Wrapper>
      <div>
        <Link to="/">LOGO</Link>
        <Link to="/contents">일일 컨텐츠</Link>
        <Link to="/myfolder">내 스크랩</Link>
      </div>
      <div>
        <Button onClick={openModal}>로그인</Button>
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
