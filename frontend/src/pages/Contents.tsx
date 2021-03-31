import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Card, Checkbox, Container, Grid } from '@material-ui/core';
import { TurnedIn, MoreVert } from '@material-ui/icons';
import Blog from 'components/daily/Blog';
import Youtube from 'components/daily/Youtube';
import Job from 'components/daily/Job';

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

function Contents() {
  const [active, setActivate] = useState(0);
  const [isBlog, setBlog] = useState(true);
  const [isYoutube, setYoutube] = useState(false);
  const [isJob, setJob] = useState(false);

  const clickHandler = (v: number) => {
    if (v == 0) {
      setBlog(true);
      setYoutube(false);
      setJob(false);
    } else if (v == 1) {
      setBlog(false);
      setYoutube(true);
      setJob(false);
    } else {
      setBlog(false);
      setYoutube(false);
      setJob(true);
    }
    setActivate(v);
  };
  return (
    <Wrapper>
      <Container>
        <Tab>
          <MyButton
            onClick={() => clickHandler(0)}
            style={{ filter: isBlog ? 'brightness(1.5)' : 'brightness(0.75)' }}
          >
            개발 블로그
          </MyButton>
          <Title> | </Title>
          <MyButton
            onClick={() => clickHandler(1)}
            style={{
              filter: isYoutube ? 'brightness(1.5)' : 'brightness(0.75)',
            }}
          >
            유튜브 동영상
          </MyButton>
          <Title> | </Title>
          <MyButton
            onClick={() => clickHandler(2)}
            style={{ filter: isJob ? 'brightness(1.5)' : 'brightness(0.75)' }}
          >
            채용
          </MyButton>
        </Tab>
        {(function () {
          if (active == 0) return <Blog></Blog>;
          if (active == 1) return <Youtube></Youtube>;
          if (active == 2) return <Job></Job>;
        })()}
      </Container>
    </Wrapper>
  );
}

export default Contents;
