import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Card, Checkbox, Container, Grid } from '@material-ui/core';
import { TurnedIn, MoreVert } from '@material-ui/icons';

// Base title
const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.first};
`;

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.first};
  margin: 10px;
`;

const CardButtonWrapper = styled.div`
  display: flex;
  /* align-items: center; */
`;

function CardButtonGroup() {
  const [checked, setChecked] = useState(false);
  return (
    <CardButtonWrapper color="green">
      <span>
        <Checkbox
          icon={<TurnedIn />}
          checkedIcon={<TurnedIn />}
          checked={checked}
          onChange={() => setChecked(!checked)}
          color="primary"
        />
      </span>
    </CardButtonWrapper>
  );
}

function Switch() {
  const inputSlide = {
    BoxSizing: 'inherit',
    font: 'inherit',
    margin: '0',
    overflow: 'visible',
    padding: '0',
    opacity: '0',
    height: '0',
    width: '0',
    color: 'white',
  };
  const slider = {
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#ccc',
    WebkitTransition: '.4s',
    transition: '.4s',
  };
  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        // 한줄 만들기
        width: '60px',
        height: '34px',
      }}
    >
      <input type="checkbox" style={inputSlide}></input>
      <span style={slider}></span>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <Title>최신 블로그 게시물</Title>
      <Title style={{ fontSize: '16px', float: 'right' }}>
        내 관심 분야 <Switch></Switch>
      </Title>
      <br />
      <Grid spacing={4}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {[4, 4, 4].map((value) => (
              <Grid item xs={12} md={4} sm={6}>
                <Card>
                  <img
                    src="https://storage.surfit.io/env/landing/RwDpw/img-8789728795fd9e37337f16.jpg"
                    alt="random image"
                  />
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <SubTitle>
                      Big Data Big DataBig DataBig DataBig DataBig DataBig
                      DataBig Data
                    </SubTitle>
                    <CardButtonGroup></CardButtonGroup>
                  </div>
                  <SubTitle>naver</SubTitle>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Blog;
