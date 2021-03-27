// components
import {
  BarChart,
  ImageChart,
  NetworkMap,
  WordCloudChart,
} from 'components/chart/ChartWrapper';

// styles
import { Container, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled, { DefaultTheme } from 'styled-components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    sidebar: {
      padding: theme.spacing(1),
    },
    charts: {
      padding: theme.spacing(2),
    },
  }),
);

// 사이드바 시작
const NavWrapper = styled.nav`
  font-family: 'Circular Std', 'Noto Sans KR', 'Open Sans', sans-serif;
  font-weight: 700;
  width: 87.5%;
  height: 100%;
  margin: -20px 0 0;
  padding: 100px 0 0;
`;

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text.second};
  .category-1 > a {
    height: 40px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
  .category-2 > a {
    height: 32px;
    padding: 4px 2rem 0;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  .item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    &:hover {
      color: ${({ theme }) => theme.colors.text.first};
      transition: 0.3s all;
    }
  }
`;
// 사이드바 끝

// 컨텐츠 시작
const ContentTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.text.first};
  width: 100%;
`;

const ContentWrapper = styled.div`
  font-family: 'Circular Std', 'Noto Sans KR', 'Open Sans', sans-serif;
  position: relative;
  width: 100%;
  height: 100%;
  margin: -20px 0 0;
  padding: 100px 0 0;
`;
// 컨텐츠 끝

function Sidebar() {
  return (
    <NavWrapper>
      <NavContainer>
        <ul className="nav-items">
          <li className="category-1">
            <a className="item">공통 보고서</a>
          </li>
          <li className="category-1">
            <a className="item">카테고리 별 보고서</a>
            <ul className="category-2 wrap">
              <li className="category-2">
                <a className="item">언어</a>
              </li>
              <li className="category-2">
                <a className="item">웹</a>
              </li>
              <li className="category-2">
                <a className="item">모바일</a>
              </li>
            </ul>
          </li>
          <li className="category-1"></li>
        </ul>
      </NavContainer>
    </NavWrapper>
  );
}
function ChartTest() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Grid container>
          <Grid container item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid container item xs={12} md={9}>
            <ContentWrapper>
              <ContentTitle>Title</ContentTitle>
              <Grid item xs={12} spacing={1}>
                <BarChart />
              </Grid>
              <Grid item xs={12}>
                <ImageChart />
              </Grid>
              <Grid item xs={12}>
                <NetworkMap />
              </Grid>
              <Grid item xs={12}>
                <WordCloudChart />
              </Grid>
            </ContentWrapper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ChartTest;
