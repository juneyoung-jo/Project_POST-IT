import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TurnedIn from '@material-ui/icons/TurnedIn';
import { Modal } from './Modal';

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

function Header() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Wrapper>
      <div>
        <Link to="/">LOGO</Link>
        <Link to="/">일일 컨텐츠</Link>
        <Link to="/">
          내 스크랩
          <TurnedIn />
        </Link>
      </div>
      <div>
        <Button onClick={openModal}>로그인</Button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
    </Wrapper>
  );
}

export default Header;
