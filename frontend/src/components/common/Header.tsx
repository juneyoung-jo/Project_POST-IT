import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { Modal } from './Modal';

import Login from 'pages/Login';
import theme from 'assets/theme';

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
    font-size: 15px;
    font-weight: 700;
    padding: 0 1rem;
    color: ${({ theme }) => theme.colors.text.third};
    &:hover {
      transition: all 0.1s ease-in-out;
      color: ${({ theme }) => theme.colors.text.first};
    }
  }
`;

const Button = styled.button`
  font-family: 'Circular Std', 'Noto Sans KR', 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  background: none;
  border: none;
  margin: auto 1rem;
  padding-top: 5px;
  color: ${({ theme }) => theme.colors.text.second};
  &:hover {
    color: ${({ theme }) => theme.colors.text.first};
  }
`;

interface PropsTypes {
  authenticated: boolean;
  onLogout: any;
}

interface MenuTypes {
  to: string;
  item: string;
  children?: string;
}

const MenuItem = ({ to, item, children }: MenuTypes) => (
  <NavLink
    to={to}
    className={`header-${item}`}
    activeStyle={{ color: theme.colors.text.first }}
    isActive={(match) => {
      if (!match) {
        return false;
      }
      return match.isExact;
    }}
  >
    {children}
  </NavLink>
);

function Header(props: PropsTypes) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Wrapper>
      <div>
        <MenuItem to={'/'} item={'logo'}>
          POST-IT
        </MenuItem>
        <MenuItem to={'/report'} item={'menus'}>
          IT 보고서
        </MenuItem>
        <MenuItem to={'/contents'} item={'menus'}>
          일일 컨텐츠
        </MenuItem>
        {props.authenticated ? (
          <MenuItem to={'/myfolder'} item={'menus'}>
            내 스크랩
          </MenuItem>
        ) : null}
      </div>
      {props.authenticated ? (
        <div>
          <Button onClick={props.onLogout}>
            <span>로그아웃</span>
          </Button>
        </div>
      ) : (
        <div>
          <Button onClick={openModal}>로그인</Button>
        </div>
      )}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        children={<Login />}
      ></Modal>
    </Wrapper>
  );
}

export default Header;
