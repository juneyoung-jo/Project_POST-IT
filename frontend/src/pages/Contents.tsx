import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Card, Checkbox, Container, Grid } from '@material-ui/core';
import { TurnedIn, MoreVert } from '@material-ui/icons';
import Blog from 'components/daily/Blog';
import Youtube from 'components/daily/Youtube';

//랩퍼
const Wrapper = styled.div`
  top: 0;
  position: static;
  margin: 1rem auto;
  display: block;
  width: 100%;
  height: 100vh;
  font-family: 'Circular Std', 'Noto Sans', 'Open Sans', sans-serif;
  img {
    max-height: 250px;
    object-fit: contain;
  }
`;

// 상단 탭
const Tab = styled.div`
  display: flex;
  margin-top: 90px;
  margin-bottom: 50px;
`;
// 버튼 디자인
const MyButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text.first};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin: 0px 5px 0px;
`;

// Base title
const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.first};
`;

function Section() {
  return (
    <Tab>
      <MyButton onClick={() => this.clickHandler(0)}>개발 블로그</MyButton> <Title> | </Title>
      <MyButton onClick={() => this.clickHandler(1)}>유튜브 동영상</MyButton> <Title> | </Title>
      <MyButton onClick={() => this.clickHandler(2)}>채용</MyButton>
    </Tab>
  );
}

function Contents() {
  const { activate, setActivate } = 
  return (
    <Wrapper>
      <Container>
        <Section></Section>
        <Title>최신 블로그 게시물</Title>
        <Blog></Blog>
        <Youtube></Youtube>
      </Container>
    </Wrapper>
  );
}

export default Contents;
