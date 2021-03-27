import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Card, Checkbox, Container, Grid } from '@material-ui/core';
import { TurnedIn, MoreVert } from '@material-ui/icons';
import { SliderSwitch } from './Daily.styles';
// Base title
const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.first};
  display: flex;
  align-items: center;
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
          onChange={() => {
            setChecked(!checked);
            // 체크 하면 즐겨찾기 api 추가 or 빼기
            console.log(checked);
          }}
          color="primary"
        />
      </span>
    </CardButtonWrapper>
  );
}

function Switch() {
  return (
    <SliderSwitch>
      {/* 관심 분야 스위치 온 오프 */}
      <input type="checkbox" onChange={() => console.log('hello')}></input>
      <span></span>
    </SliderSwitch>
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
                  <a href="https://www.instagram.com/p/CG2jk9HgNLq/">
                    <img
                      src="https://storage.surfit.io/env/landing/RwDpw/img-8789728795fd9e37337f16.jpg"
                      alt="random image"
                    />
                  </a>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <SubTitle>
                      <a href="https://www.instagram.com/p/CG2jk9HgNLq/">
                        Big Data Big DataBig DataBig DataBig DataBig DataBig
                        DataBig Data
                      </a>
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
