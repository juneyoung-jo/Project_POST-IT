import { useState } from 'react';

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
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled, { DefaultTheme } from 'styled-components';

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
  }),
);

const Wrapper = styled.div`
  font-family: 'Circular Std', 'Noto Sans KR', 'Open Sans', sans-serif;
  position: relative;
  width: 100%;
  height: 100%;
  margin: -20px 0 0;
  padding: 100px 0 0;
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.text.first};
  width: 100%;
`;
const CategorySelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

function Report() {
  const classes = useStyles();
  const [keyword, setKeyword] = useState('공통');

  return (
    <div>
      <Container>
        <Grid container spacing={1}>
          <Wrapper>
            <div>
              <Title>공통</Title>
            </div>
            <div>
              <Title>카테고리 별</Title>
              <CategorySelect>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="grouped-select">카테고리</InputLabel>
                  <Select
                    variant="outlined"
                    defaultValue="1"
                    id="grouped-select"
                  >
                    <MenuItem value={1}>공통</MenuItem>
                    <MenuItem value={2}>언어</MenuItem>
                    <MenuItem value={3}>웹</MenuItem>
                    <MenuItem value={4}>모바일</MenuItem>
                    <MenuItem value={4}>백엔드</MenuItem>
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
            </div>
          </Wrapper>
        </Grid>
      </Container>
    </div>
  );
}

export default Report;
