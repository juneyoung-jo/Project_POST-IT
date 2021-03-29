import React, { useState } from 'react';

// components
import {
  BarChart,
  ImageChart,
  NetworkMap,
  WordCloudChart,
} from 'components/chart/ChartWrapper';

// types
import { ChartProps } from 'types/chartTypes';

// styles
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  FormControl,
  Grid,
  InputLabel,
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    formControl: {
      width: '25%',
      minWidth: 120,
    },
    grid: {
      padding: '1rem',
      marginBottom: '1rem',
    },
    select: {
      backgroundColor: '#f2f3f6',
    },
    listitemlink: {
      height: '56px',
      color: '#e2e3e6',
    },
  }),
);

// top 3 더미데이터
let top3: any[] = [];
for (let i = 1; i < 4; i++) {
  top3.push({ title: 'top ' + i, content: "I 'm Top" + i });
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

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return (
    <>
      <ListItem button component="a" {...props} />
      <Divider />
    </>
  );
}

function Report() {
  // 스택오버플로우 top10을 넣어둘 변수
  // const [top10, setTop10] = useState([]);

  // material-ui 스타일 적용
  const classes = useStyles();

  // change event 발생 시 input value를 넣어줄 변수
  const [category, setCategory] = useState('공통');

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    console.log(e.target.value);
    setCategory(e.target.value as string);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          {/* 공통 시작 */}
          <Title>Vote Top 10</Title>
          <Subtitle>
            스택오버플로우에서 주간 vote수 top10을 가져와봤어요 !
          </Subtitle>
          <Section>
            {/* Top 3 시작 */}
            <Grid container>
              {top3.map(() => (
                <Grid md={4}>
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
                        Title: I'm Title !!!
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
          {/* 공통 끝 */}

          {/* 카테고리 시작 */}
          <Section>
            <Title>Report by category</Title>
            <Subtitle>
              프로그래밍 언어, 웹, 모바일, 백엔드 등 주간 카테고리별 보고서를
              가져왔어요.
            </Subtitle>
            <CategorySelect>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">카테고리</InputLabel>
                <Select
                  variant="outlined"
                  id="grouped-select"
                  className={classes.select}
                  value={category}
                  onChange={handleChange}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </CategorySelect>

            <Grid className={classes.grid} item xs={12} spacing={1}>
              <BarChart />
            </Grid>
            <Grid container>
              <Grid className={classes.grid} item xs={12} md={6} spacing={3}>
                <WordCloudChart />
              </Grid>
              <Grid className={classes.grid} item xs={12} md={6} spacing={3}>
                <NetworkMap />
              </Grid>
            </Grid>
            <Grid className={classes.grid} item xs={12} spacing={3}>
              <ImageChart />
            </Grid>
          </Section>
          {/* 카테고리 끝 */}
        </Wrapper>
      </Container>
    </div>
  );
}

export default Report;
