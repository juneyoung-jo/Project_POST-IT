import React, { useState } from 'react';
import { useStyles } from './material.styles';
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
  '공통',
  '언어',
  '웹',
  '모바일',
  '백엔드',
  '블록체인',
  '클라우드/devops',
  '빅데이터/머신러닝/AI',
];

interface IProps {
  data?: any;
  category_report?: any;
}

function SectionTwo(props: IProps) {
  console.log(props.data);
  const classes = useStyles();
  const [category, setCategory] = useState('공통');

  const handleChangeCategory = (e: React.ChangeEvent<{ value: unknown }>) => {
    // console.log(e.target.value);
    setCategory(e.target.value as string);
  };
  return (
    <div>
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
          <Typography>에러 TOP 3</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default SectionTwo;
