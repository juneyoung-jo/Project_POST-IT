import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { getCurrentUser } from 'api/user';

import Login from 'pages/Login';
import theme from 'assets/theme';
import { Modal } from './Modal';
import { Wrapper, Button } from './Header.styles';
import { PropsTypes, MenuTypes } from 'types/common/headerTypes';
import axios from 'axios';

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
    onClick={() => window.scrollTo(0, 0)}
  >
    {children}
  </NavLink>
);

function Header(props: PropsTypes) {
  // console.log(props);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  let history = useHistory();

  function goHome() {
    history.push('/');
  }

  return (
    <Wrapper>
      <div>
        <MenuItem to={'/'} item={'logo'} onClick={() => window.scrollTo(0, 0)}>
          POST-IT
        </MenuItem>
        <MenuItem to={'/report'} item={'menus'}>
          IT 보고서
        </MenuItem>
        <MenuItem to={'/contents'} item={'menus'}>
          일일 컨텐츠
        </MenuItem>
        {props.authenticated ? (
          <MenuItem
            to={'/profile'}
            item={'menus'}
            // name={props.name}
            // email={props.email}
            // img={props.email}
          >
            프로필
          </MenuItem>
        ) : null}
        {/* <MenuItem to={'/myfolder'} item={'menus'}>
          내 스크랩
        </MenuItem> */}
      </div>
      {props.authenticated ? (
        <div>
          <Button
            onClick={() => {
              props.onLogout(), goHome();
            }}
          >
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
