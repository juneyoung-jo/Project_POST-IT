import React, { useState, useEffect } from 'react';
import { useStyles } from './material.styles';
import { ChartPropsType } from 'types/report/chartTypes';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  FormControl,
  Grid,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';
import {
  BarChart,
  NetworkMap,
  WordCloudChart,
} from 'components/chart/category/ChartWrapper';
import { CategorySelect } from 'pages/Report.styles';

// 카테고리 옵션
const options = [
  'language',
  'web',
  'mobile',
  'backend',
  'cloud-devops',
  'bigdata-ai-ml',
  'database',
];

// let data: { [key: string]: any } = {
//   backend: [{}],
//   'bigdata-ai-ml': [{}],
//   'cloud-devops': [{}],
//   database: [{}],
//   language: { most_hot_keyword: 'gigi' },
//   mobile: [{}],
//   web: [{}],
// };

function SectionTwo(props: ChartPropsType) {
  const classes = useStyles();

  // console.log(props.data['language']);
  // console.log(data['language'].most_hot_keyword);

  const [category, setCategory] = useState('language');
  const handleChangeCategory = (e: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(e.target.value as string);
  };
  if (
    props.data['language'] === undefined ||
    props.data[category].most_hot_keyword === undefined ||
    props.data[category].tag_wordcloud === undefined
  ) {
    console.log('없음');
    return (
      <>
        <CircularProgress />;
      </>
    );
  } else {
    console.log('있음');
    return (
      <>
        <CategorySelect>
          <FormControl className={classes.formControlB}>
            <Select
              variant="outlined"
              id="category-select"
              className={classes.select}
              value={category}
              onChange={handleChangeCategory}
            >
              {options.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CategorySelect>
        <Grid container spacing={3}>
          <Grid className={classes.grid} item xs={12}>
            <BarChart data={props.data[category].most_hot_keyword}></BarChart>
          </Grid>
          <Grid container>
            <Grid className={classes.grid} item xs={12} md={6}>
              <WordCloudChart
                data={props.data[category].tag_wordcloud}
                category={category}
              />
            </Grid>
            <Grid className={classes.grid} item xs={12} md={6}>
              <NetworkMap
                data={props.data[category].network_map}
                category={category}
              />
            </Grid>
          </Grid>
          <Grid className={classes.grid} item xs={12}>
            <Typography>에러 TOP 3</Typography>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default SectionTwo;
