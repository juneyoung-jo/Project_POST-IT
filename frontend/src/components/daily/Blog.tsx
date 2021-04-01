import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { Block, ContactSupportOutlined, TurnedIn } from '@material-ui/icons';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { SliderSwitch } from './Daily.styles';
import { allBlog, cartegorySearch } from 'api/daily';
// import { withStyles } from '@material-ui/core/styles';

// Base title
const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.first};
  display: flex;
  align-items: center;
`;

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.card.content};
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

const CardButtonWrapper = styled.div`
  display: flex;
  /* align-items: center; */
`;

const StyledCard = styled(Card)`
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  overflow: hidden;
  .MuiCard-rounded {
    border-radius: 16px;
    border: 0.3px solid #2e2e2e;
  }
  &:hover {
    transform: scale(1.02);
  }
` as typeof Card;

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
      <input type="checkbox" onChange={() => console.log('hello')}></input>
      <span></span>
    </SliderSwitch>
  );
}

function Blog() {
  // console.log('hello');
  const blog = [];
  useEffect(() => {
    // console.log('랜더링 완료');
    allBlog().then((res) => {
      console.log(res);
    });
    return () => {
      // 해당 컴포넌트가 사라질 때
      console.log('컴포넌트 업데이트');
    };
  }, []);

  return (
    <div>
      <Title>최신 블로그 게시물</Title>
      <Title style={{ fontSize: '16px', float: 'right' }}>
        내 관심 분야 <Switch></Switch>
      </Title>
      <br />
      <Grid spacing={4}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {[4, 4, 4].map((value) => (
              <Grid item xs={12} md={4} sm={6}>
                <StyledCard style={{ borderRadius: '20px' }}>
                  <a
                    href="https://www.instagram.com/p/CG2jk9HgNLq/"
                    style={{ backgroundColor: '#2e2e2e', display: 'block' }}
                  >
                    <img
                      src="https://storage.surfit.io/env/landing/RwDpw/img-8789728795fd9e37337f16.jpg"
                      alt="random image"
                      style={{ height: '250px' }}
                    />
                  </a>
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: '#2e2e2e',
                        color: '#b6b7b8',
                        marginTop: '0',
                      }}
                    >
                      <SubTitle>
                        <a href="https://www.instagram.com/p/CG2jk9HgNLq/">
                          Big Data is very good skill. but I don't like it. I
                          want frontend Big Data is very good skill. but I don't
                          like it. I want frontend
                        </a>
                      </SubTitle>
                      <CardButtonGroup></CardButtonGroup>
                    </div>
                    <SubTitle
                      style={{ backgroundColor: '#2e2e2e', margin: '0' }}
                    >
                      <p style={{ margin: '10px' }}>naver</p>
                      <p style={{ margin: '10px' }}>2021-01-03</p>
                    </SubTitle>
                  </div>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Blog;
