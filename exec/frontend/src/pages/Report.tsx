import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

// axios
import { getReport } from 'api/report';

// components
import ImageChart from 'components/chart/common/ImageChart';
import { useStyles } from 'components/report/Section.styles';
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

// 주차별 옵션
let weeks: string[] = [];
let weekIndex = new Map();
let most_vote: Array<Array<object>> = [];
let all_category_ratio: Array<Array<object>> = [];
let category_report: Array<object> = [];

function empty() {
  weeks.length = 0;
  most_vote.length = 0;
  all_category_ratio.length = 0;
  category_report.length = 0;
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
  };

  //axios작업
  useEffect(() => {
    async function insertReportData() {
      let res = await getReport();
      empty();
      for (const d in res.data.data) {
        weekIndex.set(res.data.data[d].date, d);
        weeks.push(res.data.data[d].date);
        most_vote.push(res.data.data[d].common_report.most_vote);
        all_category_ratio.push(
          res.data.data[d].common_report.all_category_ratio,
        );
        category_report.push(res.data.data[d].category_report);
      }

      let initData = res.data.data[0]; // index 0인 값들, 가장 최신 주차
      setCategoryReport(initData.category_report);
      setMostVote(initData.common_report.most_vote);
      setAllCategoryRatio(initData.common_report.all_category_ratio);
      setDate(initData.date);
    }
    insertReportData();

    return () => {
      setAllCategoryRatio([]);
      setCategoryReport([]);
      setMostVote([]);
      setDate('');
    };
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
