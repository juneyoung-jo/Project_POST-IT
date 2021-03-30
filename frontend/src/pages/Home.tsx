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
import {
  Section,
  Title,
  SubTitle,
  ContentText,
  SubContentText,
  Img,
} from '../assets/styles/HomeStyle';
import { Container } from '@material-ui/core';

AOS.init();

const Home = () => {
  return (
    <Container>
      {/* 첫번째 section */}
      <Section>
        <Grid container>
          <Grid item xs={12}>
            <SubTitle data-aos="fade-in" data-aos-duration="1000">
              IT 트렌드를 담다
            </SubTitle>
            <Title data-aos="fade-in" data-delay="1000">
              POST-IT.
            </Title>
          </Grid>
        </Grid>
      </Section>
      {/* 두번째 section */}
      <Section>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ContentText data-aos="fade-in" style={{ textAlign: 'center' }}>
              다양한 그래프를 통해 최신 IT 트렌드를 확인해보세요.
            </ContentText>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Img src={graph1} alt="graph1" data-aos="fade-in"></Img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Img src={graph2} alt="graph2" data-aos="fade-in"></Img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Img src={graph3} alt="graph3" data-aos="fade-in"></Img>
          </Grid>
          <Grid item xs={12}>
            <SubContentText style={{ textAlign: 'center' }}>
              카테고리별 통계를 통해 더욱더 자세한 트렌드를 확인할 수 있어요.
            </SubContentText>
          </Grid>
        </Grid>
      </Section>
      {/* 세번째 section */}
      <Section>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <Img src={contents} alt="graph3" data-aos="fade-right"></Img>
          </Grid>
          <Grid container xs={12} sm={7} direction="column" justify="center">
            <ContentText data-aos="fade-in" style={{ textAlign: 'end' }}>
              최신 트렌드 관련 콘텐츠를 확인해보세요.
            </ContentText>
            <SubContentText
              data-aos="fade-in"
              style={{ textAlign: 'end', marginTop: '20px' }}
            >
              관심 키워드 ON/OFF 기능을 통해 관심분야만 빠르게 확인할 수 있어요.
            </SubContentText>
          </Grid>
        </Grid>
      </Section>
      {/* 네번째 section */}
      <Section>
        <Grid container>
          <Grid container xs={12} sm={7} direction="column" justify="center">
            <ContentText data-aos="fade-in" style={{ textAlign: 'start' }}>
              다시 보고 싶은 콘텐츠를 스크랩하여 모아보세요.
            </ContentText>
            <SubContentText
              data-aos="fade-in"
              style={{ textAlign: 'start', marginTop: '20px' }}
            >
              콘텐츠별 스크랩이 가능해 편리하게 모아볼 수 있어요.
            </SubContentText>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Img src={mycontents} alt="mycontents" data-aos="fade-left"></Img>
          </Grid>
        </Grid>
      </Section>
      {/* 다섯번째 section */}
      <Section>
        <Grid container>
          <Grid item xs={12}>
            <ContentText
              data-aos="fade-in"
              data-delay="1000"
              style={{ textAlign: 'center' }}
            >
              이제 POST-IT과 함께 개발자로 성장해보세요!
            </ContentText>
          </Grid>
          <Grid item xs={12} direction="row" justify="center">
            <Link
              to="/"
              data-aos="fade-in"
              data-aos-duration="1000"
              className="go-report"
            >
              IT 트렌드 확인하러 가기 Click!
            </Link>
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

export default Home;
