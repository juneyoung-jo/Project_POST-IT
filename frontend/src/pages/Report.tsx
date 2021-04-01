import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { RouteComponentProps } from 'react-router-dom';

// axios
import { instance } from 'api/index';

// components
import {
  BarChart,
  NetworkMap,
  WordCloudChart,
} from 'components/chart/category/ChartWrapper';
import { ImageChart, PieChart } from 'components/chart/common/ChartWrapper';

// styles
import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
  List,
  ListItem,
  ListItemProps,
  Divider,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Wrapper,
  Title,
  Subtitle,
  CategorySelect,
  Section,
} from './Report.styles';
import TopButton from 'components/common/TopButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      background: '#858090',
    },
    formControlA: {
      width: '25%',
      minWidth: 120,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: '3rem',
      },
    },
    formControlB: {
      width: '25%',
      minWidth: 120,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginBottom: '1rem',
      },
    },
    grid: {
      padding: '1rem',
      marginBottom: '1rem',
    },
    card_grid: {
      padding: '0.5rem',
    },
    listitemlink: {
      height: '56px',
      color: '#e2e3e6',
    },
    select: {
      backgroundColor: '#f2f3f6',
    },
  }),
);

// top 3 더미데이터
let top3: any[] = [];
for (let i = 1; i < 4; i++) {
  top3.push({
    id: i,
    title: '안녕하세요 나는 타이틀입니다.',
    content: "I 'm Top" + i,
  });
}

// top10 더미데이터
let top10: any[] = [];
for (let i = 4; i < 11; i++) {
  top10.push({ title: 'top ' + i, content: "I 'm Top" + i });
}

// 카테고리 옵션
const options = [
  '공통',
  '언어',
  '웹',
  '모바일',
  '백엔드',
  '블록체인',
  '클라우드/devops',
  '빅데이터/머신러닝/AI',
];

// 주차별 옵션
const weeks = [
  '현재',
  '1주 전',
  '2주 전',
  '3주 전',
  '4주 전',
  '5주 전',
  '6주 전',
  '7주 전',
  '8주 전',
  '9주 전',
];

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  const classes = useStyles();

  return (
    <>
      <ListItem button component="a" {...props} />
      <Divider className={classes.divider} />
    </>
  );
}

const Report: React.FC<RouteComponentProps> = ({
  match,
  location,
  history,
}) => {
  // 스택오버플로우 top10을 넣어둘 변수
  // const [top10, setTop10] = useState([]);

  // material-ui 스타일 적용
  const classes = useStyles();

  // change event 발생 시 input value를 넣어줄 변수
  const [category, setCategory] = useState('공통');
  const [week, setWeek] = useState('현재');

  const handleChangeCategory = (e: React.ChangeEvent<{ value: unknown }>) => {
    // console.log(e.target.value);
    setCategory(e.target.value as string);
  };
  const handleChangeWeek = (e: React.ChangeEvent<{ value: unknown }>) => {
    // console.log(e.target.value);
    setWeek(e.target.value as string);
  };

  //axios작업
  useEffect(() => {
    instance.get('/report/common').then((res) => console.log(res));
    return () => {};
  }, []);

  return (
    <div>
      <Container>
        <TopButton></TopButton>
        <Wrapper>
          <CategorySelect>
            <FormControl className={classes.formControlA}>
              <Select
                variant="outlined"
                id="week-select"
                className={classes.select}
                value={week}
                onChange={handleChangeWeek}
              >
                {weeks.map((week) => (
                  <MenuItem key={week} value={week}>
                    {week}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CategorySelect>
          {/* top10 시작 */}
          <Title>Vote Top 10</Title>
          <Subtitle>
            스택오버플로우에서 주간 vote수 top10을 가져왔어요.
          </Subtitle>
          <Section>
            {/* Top 3 시작 */}
            <Grid container spacing={2} justify="space-between">
              {top3.map((content, index) => (
                <Grid item xs={12} md={4} key={content.id}>
                  <Card>
                    <CardContent>
                      <svg
                        height="20px"
                        width="20px"
                        viewBox="0 -92 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m77.671875 277.976562v34.386719c0 8.328125 6.75 15.078125 15.078125 15.078125h326.5c8.328125 0 15.078125-6.75 15.078125-15.078125v-34.386719zm0 0" />
                        <path d="m512 86.316406c0-26.863281-21.855469-48.71875-48.71875-48.71875s-48.714844 21.855469-48.714844 48.71875c0 12.914063 5.058594 24.664063 13.292969 33.390625-14.644531 16.382813-35.910156 26.722657-59.558594 26.722657-38.28125 0-70.34375-27.0625-78.101562-63.054688 8.957031-8.839844 14.519531-21.109375 14.519531-34.65625 0-26.863281-21.855469-48.71875-48.71875-48.71875s-48.71875 21.855469-48.71875 48.71875c0 13.546875 5.566406 25.816406 14.519531 34.65625-7.757812 35.992188-39.820312 63.054688-78.101562 63.054688-23.648438 0-44.914063-10.339844-59.558594-26.722657 8.234375-8.726562 13.296875-20.476562 13.296875-33.390625 0-26.863281-21.855469-48.71875-48.71875-48.71875s-48.71875 21.855469-48.71875 48.71875c0 23.28125 16.417969 42.789063 38.28125 47.578125 4.324219 35.6875 12.679688 79.167969 28.8125 113.925781h377.8125c16.132812-34.757812 24.488281-78.238281 28.8125-113.925781 21.863281-4.792969 38.28125-24.296875 38.28125-47.578125zm0 0" />
                      </svg>
                      <Typography color="textSecondary" gutterBottom>
                        Keyword of the Week
                      </Typography>
                      <Typography variant="h5" component="h2">
                        Top {index + 1} - {content.title}
                      </Typography>
                      <Typography color="textSecondary">tagname</Typography>
                      <Typography variant="body2" component="p">
                        this is content. this is content. this is content.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* Top3 끝 */}
            <List component="nav" aria-label="main mailbox folders">
              {top10.map((content) => (
                <ListItemLink
                  className={classes.listitemlink}
                  key={content.title}
                  href="/report"
                >
                  <h1>{content.title}</h1>
                  <span>{content.content}</span>
                </ListItemLink>
              ))}
            </List>
          </Section>
          {/* top10 끝 */}

          {/* image-chart 시작 */}
          <Title>Keyword Ratio</Title>
          <Subtitle>키워드 별 빈도수의 비율을 계산했어요.</Subtitle>
          <Section>
            <ImageChart />
          </Section>
          {/* image-chart 끝 */}

          {/* 카테고리 시작 */}
          <Title>Report by category</Title>
          <Subtitle>
            프로그래밍 언어, 웹, 모바일, 백엔드 등 주간 카테고리별 보고서를
            가져왔어요.
          </Subtitle>
          <Section>
            <CategorySelect>
              <FormControl className={classes.formControlB}>
                <Select
                  variant="outlined"
                  id="category-select"
                  className={classes.select}
                  value={category}
                  onChange={handleChangeCategory}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </CategorySelect>
            <LazyLoad height={200} offset={100} once>
              <Grid container spacing={3}>
                <Grid className={classes.grid} item xs={12}>
                  <BarChart category={category}></BarChart>
                </Grid>
                <Grid container>
                  <Grid className={classes.grid} item xs={12} md={6}>
                    <WordCloudChart category={category} />
                  </Grid>
                  <Grid className={classes.grid} item xs={12} md={6}>
                    <NetworkMap category={category} />
                  </Grid>
                </Grid>
                <Grid className={classes.grid} item xs={12}>
                  <Title>에러 TOP 3</Title>
                </Grid>
              </Grid>
            </LazyLoad>
          </Section>
          {/* 카테고리 끝 */}

          {/* ETC 시작 */}
          <Title>요즘뜨는 OO</Title>
          <Subtitle>요즘뜨는 OS, 요즘뜨는 Editor는 무엇이 있을까요?</Subtitle>
          <Section>
            <LazyLoad height={500} offset={100} once>
              <Grid container spacing={3}>
                <Grid className={classes.grid} item xs={12}>
                  <PieChart category="OS" chartId="os-chart" />
                </Grid>
                <Grid className={classes.grid} item xs={12}>
                  <PieChart category="Editor" chartId="editor-chart" />
                </Grid>
              </Grid>
            </LazyLoad>
          </Section>
          {/* ETC 끝 */}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Report;
