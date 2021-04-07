import React, { useState, useEffect } from 'react';
import { useStyles } from './Section.styles';
import { ChartPropsType } from 'types/report/chartTypes';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  FormControl,
  Grid,
  Divider,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  BarChart,
  NetworkMap,
  WordCloudChart,
} from 'components/chart/category/ChartWrapper';
import { CategorySelect } from 'pages/Report.styles';
import {
  Top10Inner,
  Top10Counts,
  Title,
  SubTitle,
  ListItemLink,
} from './Section.styles';

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

function SectionTwo(props: ChartPropsType) {
  const classes = useStyles();

  const [category, setCategory] = useState('language');
  const handleChangeCategory = (e: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(e.target.value as string);
  };
  if (
    props.data['language'] === undefined ||
    props.data[category].most_hot_keyword === undefined ||
    props.data[category].tag_wordcloud === undefined
  ) {
    return (
      <>
        <CircularProgress />;
      </>
    );
  } else {
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
          <Grid className={classes.grid} item xs={12}>
            <WordCloudChart
              data={props.data[category].tag_wordcloud}
              category={category}
            />
          </Grid>
          <Grid className={classes.grid} item xs={12}>
            <NetworkMap
              data={props.data[category].network_map}
              category={category}
            />
          </Grid>
          <Grid className={classes.grid} item xs={12}>
            <Title>에러 TOP 10</Title>
            <SubTitle>카테고리 별 에러 TOP 10개를 뽑아왔어요.</SubTitle>
            <ul>
              {props.data[category].most_error.map(
                (value: any, index: number) => (
                  <li key={index}>
                    <ListItemLink
                      href={`https://stackoverflow.com/questions/${value.contentId}`}
                    >
                      <Top10Counts>
                        <span>{value.count}</span>
                        <span>views</span>
                      </Top10Counts>
                      <Top10Inner>
                        <span>{value.title}</span>
                        <span>{value.creation_date.slice(0, 10)}</span>
                      </Top10Inner>
                    </ListItemLink>
                    <Divider className={classes.divider} />
                  </li>
                ),
              )}
            </ul>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default SectionTwo;
