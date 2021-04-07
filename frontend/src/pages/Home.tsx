import { useState } from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import graph1 from 'assets/images/graph1.png';
import graph2 from 'assets/images/graph2.png';
import graph3 from 'assets/images/graph3.png';
import contents from 'assets/images/contents.png';
import mycontents from 'assets/images/mycontents.png';
import Grid from '@material-ui/core/Grid';
import { Section, TextStyle, Img } from '../assets/styles/HomeStyle';
import { Container } from '@material-ui/core';

import styled from 'styled-components';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { getCurrentUser } from 'api/user';
import TopButton from 'components/common/TopButton';

AOS.init();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      overflowX: 'hidden',
    },
    grid: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  }),
);

const Home = () => {
  const classes = useStyles();

  // const [inverted, setInverted] = useState(false);
  // const hadleChage = () => {
  //   setInverted(true)
  // }

  return (
    <Container className={classes.container}>
      <TopButton></TopButton>
      {/* 첫번째 section */}
      <Section>
        <Grid container>
          <Grid item xs={12}>
            <TextStyle
              fontSize="1.5em"
              fontWeight="300"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              IT 트렌드를 담다
            </TextStyle>
            <TextStyle
              fontSize="5em"
              fontWeight="700"
              data-aos="fade-in"
              data-aos-delay="1000"
              data-aos-duration="800"
            >
              POST-IT.
            </TextStyle>
          </Grid>
        </Grid>
      </Section>
      {/* 두번째 section */}
      <Section>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextStyle
              fontSize="2.5em"
              fontWeight="700"
              data-aos="fade-in"
              className="text-center"
            >
              다양한 그래프를 통해 최신 IT 트렌드를 확인해보세요.
            </TextStyle>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Img
              src={graph1}
              alt="graph1"
              data-aos="fade-right"
              data-aos-delay="200"
              hide="none"
            ></Img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Img
              src={graph2}
              alt="graph2"
              data-aos="fade-in"
              data-aos-delay="250"
            ></Img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Img
              src={graph3}
              alt="graph3"
              data-aos="fade-left"
              data-aos-delay="200"
              hide="none"
            ></Img>
          </Grid>
          <Grid item xs={12}>
            <TextStyle fontSize="1.5em" fontWeight="300" data-aos="fade-in">
              카테고리별 통계를 통해 더욱더 자세한 트렌드를 확인할 수 있어요.
            </TextStyle>
          </Grid>
        </Grid>
      </Section>
      {/* 세번째 section */}
      <Section>
        <Grid container className="mobile-reverse">
          <Grid item xs={12} sm={5}>
            <Img src={contents} alt="graph3" data-aos="fade-right"></Img>
          </Grid>

          <Grid item className={classes.grid} xs={12} sm={7}>
            <TextStyle
              fontSize="2.3em"
              fontWeight="700"
              textAlign="end"
              data-aos="fade-in"
            >
              최신 트렌드 관련 콘텐츠를 확인해보세요.
            </TextStyle>
            <TextStyle
              fontSize="1em"
              fontWeight="300"
              textAlign="end"
              marginTop="20px"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              관심 키워드 ON/OFF 기능을 통해 관심분야만 빠르게 확인할 수 있어요.
            </TextStyle>
          </Grid>
        </Grid>
      </Section>
      {/* 네번째 section */}
      <Section>
        <Grid container>
          <Grid item className={classes.grid} xs={12} sm={7}>
            <TextStyle
              fontSize="2em"
              fontWeight="700"
              textAlign="start"
              data-aos="fade-in"
            >
              다시 보고 싶은 콘텐츠를 스크랩하여 모아보세요.
            </TextStyle>
            <TextStyle
              fontSize="1em"
              fontWeight="300"
              textAlign="start"
              marginTop="20px"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              콘텐츠별 스크랩이 가능해 편리하게 모아볼 수 있어요.
            </TextStyle>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Img src={mycontents} alt="mycontents" data-aos="fade-left"></Img>
          </Grid>
        </Grid>
      </Section>
      {/* 다섯번째 section */}
      <Section>
        <Grid container>
          <Grid item className={classes.grid} xs={12}>
            <TextStyle
              fontSize="2.5em"
              fontWeight="700"
              data-aos="fade-in"
              data-delay="1000"
            >
              이제 POST-IT과 함께 개발자로 성장해보세요!
            </TextStyle>
          </Grid>
          <Grid item className={classes.grid} xs={12}>
            <Link
              to="/report"
              data-aos="fade-in"
              data-aos-delay="200"
              className="go-report"
              onClick={() => window.scrollTo(0, 0)}
            >
              IT 트렌드 확인하러 가기
            </Link>
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

export default Home;
