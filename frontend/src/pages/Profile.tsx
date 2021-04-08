import { Container, Grid } from '@material-ui/core';
import TopButton from 'components/common/TopButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React, { ReactElement, Suspense, useState, useEffect } from 'react';
import { getCurrentUser } from 'api/user';
import { API_BASE_URL } from 'config/config';

import { useRecoilState, selector } from 'recoil';
import { tokenState } from 'index';

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  xl: customMediaQuery(1920),
  lg: customMediaQuery(1280),
  md: customMediaQuery(960),
  sm: customMediaQuery(600),
};
const ProfileBox = styled.div`
  background-color: ${({ theme }) => theme.colors.second};
  height: auto;
  margin-top: 100px;
  padding: 100px;

  ${media.sm} {
    padding-left: 10px;
    padding-right: 10px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  .user-info {
    font-size: 1.6em;
    color: #fff;
    margin-top: 30px;
  }
  .info-text {
    font-size: 1.3em;
    color: #fff;
    margin-top: 30px;
    word-break: keep-all;
    line-height: 1.3;
  }
  .category {
    background: #221f2b;
    padding: 8px;
    border-radius: 8px;
    margin-left: 8px;
    margin-right: 8px;

    font-size: 1.2em;
    color: #fff;
    margin-top: 30px;
  }
`;

const Title = styled.div`
  font-size: 3em;
  color: #fff;
  text-align: center;
  line-height: 1.3;
  word-break: keep-all;
  margin-bottom: 50px;
`;

const Profileimg = styled.img`
  width: 250px;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.first};
  border-radius: 200px;
  margin-top: 30px;
  ${media.sm} {
    width: 200px;
    height: 200px;
  }
`;

const Line = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.text.second};
  width: 70%;
  height: 30px;
  margin-top: 30px;
`;

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #804bd8; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #804bd8,
    #544ad8
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #804bd8,
    #544ad8
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #f2f3f6;
  margin-top: 54px;
  padding: 16px;
  border-radius: 16px;
  font-size: 1.4em;
  border: none;
  &:hover {
    color: white;
    box-shadow: 0 4px 6px -1px black;
  }
`;

const Profile = () => {
  const name = localStorage.getItem('name') as string;
  const email = localStorage.getItem('email') as string;
  const imageUrl = localStorage.getItem('imageUrl') as string;

  return (
    <Container>
      <TopButton></TopButton>
      <ProfileBox>
        <Title>{name}님의 프로필</Title>
        <Profileimg src={imageUrl}></Profileimg>
        <div className="user-info">{name}</div>
        <div className="user-info">{email}</div>
      </ProfileBox>
    </Container>
  );
};

export default Profile;
