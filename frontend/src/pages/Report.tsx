import React, { useState, useLayoutEffect, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { RouteComponentProps } from 'react-router-dom';

// axios
import { getReport } from 'api/report';

// components
import ImageChart from 'components/chart/common/ImageChart';
import { useStyles } from 'components/report/material.styles';
import { SectionOne, SectionTwo } from 'components/report/Wrapper';

// styles
import { Container, FormControl, MenuItem, Select } from '@material-ui/core';
import {
  Wrapper,
  Title,
  Subtitle,
  CategorySelect,
  Section,
} from './Report.styles';
import TopButton from 'components/common/TopButton';
import { castNumber, ColorSet, Dictionary } from '@amcharts/amcharts4/core';
import { object } from 'prop-types';

// 주차별 옵션
const weeks: string[] = [];
let weekIndex = new Map();
let index = 0;
const most_vote: Array<Array<object>> = [];
const all_category_ratio: Array<Array<object>> = [];
const category_report: Array<object> = [];

function empty() {
  weeks.length = 0;
}
const Report = () => {
  const classes = useStyles();

  // 공통
  const [allCategoryRatio, setAllCategoryRatio] = useState<object[]>([]);
  const [mostVote, setMostVote] = useState<object[]>([]);

  // 카테고리
  const [categoryReport, setCategoryReport] = useState<object>([]);

  // 날짜
  const [date, setDate] = useState('');

  const handleChangeWeek = (e: React.ChangeEvent<{ value: unknown }>) => {
    setDate(e.target.value as string);
    const idx = parseInt(weekIndex.get(e.target.value));
    setMostVote(most_vote[idx]);
    setAllCategoryRatio(all_category_ratio[idx]);
    setCategoryReport(category_report[idx]);
    // for (let i = 0; i < weeks.length; i++) {
    //   if (weeks[i].includes(e.target.value as string)) {
    //     setMostVote(most_vote[i]);
    //     setAllCategoryRatio(all_category_ratio[i]);
    //     setCategoryReport(category_report[i]);
    //     console.log(category_report[i]);
    //     console.log('hihihihi');
    //     console.log(most_vote[i]);
    //   }
    // }
  };

  //axios작업
  useEffect(() => {
    getReport()
      .then((res) => {
        empty();
        for (const d in res.data.data) {
          // weekIndex.set('쓰레기', d);
          // weeks.push('쓰레기');
          // most_vote.push([{ id: 123 }]);
          // all_category_ratio.push([{ id: 123 }]);
          weekIndex.set(res.data.data[d].date, d + 1);
          weeks.push(res.data.data[d].date);
          most_vote.push(res.data.data[d].common_report.most_vote);
          all_category_ratio.push(
            res.data.data[d].common_report.all_category_ratio,
          );
          category_report.push([{ id: 123 }]);
          category_report.push(res.data.data[d].category_report);
          // setMostVote(d.common_report.most_vote);
          // setCategoryReport(d.category_report);
          // setAllCategoryRatio(d.common_report.all_category_ratio);
        }

        return res.data.data;
      })
      .then((res) => {
        setCategoryReport(res[0].category_report);
        setMostVote(res[0].common_report.most_vote);
        setAllCategoryRatio(res[0].common_report.all_category_ratio);
        setDate(res[0].date);
      })
      .catch((err) => console.log(err));

    // return () => {
    //   // setAllCategoryRatio([]);
    //   // setCategoryReport([]);
    //   // setMostVote([]);
    //   // setDate('');
    // };
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
                value={date}
                onChange={handleChangeWeek}
              >
                {weeks.map((week, index) => (
                  <MenuItem key={index} value={week}>
                    {week}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CategorySelect>

          {/* section 1-1 시작 */}
          <Title>Vote Top 10</Title>
          <Subtitle>
            스택오버플로우에서 주간 vote수 top10을 가져왔어요.
          </Subtitle>
          <Section>
            <LazyLoad height={200} offset={100} once>
              <SectionOne data={mostVote}></SectionOne>
            </LazyLoad>
          </Section>

          {/* section 1-1 끝 */}

          {/* section 1-2 시작 */}
          <Title>Keyword Ratio</Title>
          <Subtitle>키워드 별 빈도수의 비율을 계산했어요.</Subtitle>
          <Section>
            <LazyLoad height={200} offset={100} once>
              <ImageChart data={allCategoryRatio} />
            </LazyLoad>
          </Section>
          {/* section 1-2 끝 */}

          {/* section 2(카테고리별) 시작 */}
          <Title>Report by category</Title>
          <Subtitle>
            프로그래밍 언어, 웹, 모바일, 백엔드 등 주간 카테고리별 보고서를
            가져왔어요.
          </Subtitle>
          <Section>
            <LazyLoad height={200} offset={100} once>
              <SectionTwo data={categoryReport}></SectionTwo>
            </LazyLoad>
          </Section>
          {/* section 2(카테고리별) 끝 */}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Report;
