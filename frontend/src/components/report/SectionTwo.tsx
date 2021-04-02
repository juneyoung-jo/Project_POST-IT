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
  'language',
  'web',
  'mobile',
  'backend',
  'cloud-devops',
  'bigdata-ai-ml',
  'database',
];

interface IProps {
  data?: any;
  category_report?: any;
}

function SectionTwo(props: IProps) {
  const classes = useStyles();
  const [category, setCategory] = useState('language');
  const handleChangeCategory = (e: React.ChangeEvent<{ value: unknown }>) => {
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
          <BarChart data={props.data.backend}></BarChart>
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
