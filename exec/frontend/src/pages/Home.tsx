import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import blog from 'assets/images/blog.png';
import youtube from 'assets/images/youtube.png';
import chart1 from 'assets/images/chart1.png';
import chart2 from 'assets/images/chart2.png';
import chart3 from 'assets/images/chart3.png';

import Grid from '@material-ui/core/Grid';
import { Section, TextStyle, Img } from '../assets/styles/HomeStyle';
import { Container } from '@material-ui/core';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TopButton from 'components/common/TopButton';
import BottomButton from 'components/common/BottomButton';

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

  return (
    <Container className={classes.container}>
      <TopButton></TopButton>
      <BottomButton></BottomButton>
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
              src={chart1}
              alt="graph1"
              data-aos="fade-right"
              data-aos-delay="200"
              hide="none"
            ></Img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Img
              src={chart2}
              alt="graph2"
              data-aos="fade-in"
              data-aos-delay="250"
            ></Img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Img
              src={chart3}
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
            <Img
              style={{
                padding: '3px',
                borderRadius: '8px',
                background: '#3c3452',
                marginRight: '1rem',
              }}
              src={blog}
              alt="graph3"
              data-aos="fade-right"
            ></Img>
          </Grid>

          <Grid item className={classes.grid} xs={12} sm={7}>
            <TextStyle
              fontSize="2.3em"
              fontWeight="700"
              textAlign="end"
              data-aos="fade-in"
            >
              최신 기술 블로그 콘텐츠를 확인해보세요.
            </TextStyle>
            <TextStyle
              fontSize="1.2em"
              fontWeight="300"
              textAlign="end"
              marginTop="20px"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              네이버 / 카카오 등 IT기업별 블로그 게시물을 한 곳에서 확인할 수
              있어요.
            </TextStyle>
          </Grid>
        </Grid>
      </Section>
      {/* 네번째 section */}
      <Section>
        <Grid container>
          <Grid item className={classes.grid} xs={12} sm={7}>
            <TextStyle
              fontSize="2.3em"
              fontWeight="700"
              textAlign="start"
              data-aos="fade-in"
            >
              요즘 뜨는 IT 유튜브 동영상을 모아봤어요.
            </TextStyle>
            <TextStyle
              fontSize="1.2em"
              fontWeight="300"
              textAlign="start"
              marginTop="20px"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              원하는 유튜브 동영상을 스크랩하여 편리하게 모아볼 수 있어요 !
            </TextStyle>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Img
              style={{
                padding: '4px',
                borderRadius: '8px',
                background: '#3c3452',
                marginLeft: '1rem',
              }}
              src={youtube}
              alt="youtube"
              data-aos="fade-left"
            ></Img>
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
