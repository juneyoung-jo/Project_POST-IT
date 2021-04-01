import React, { useState, useLayoutEffect, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { RouteComponentProps } from 'react-router-dom';

// axios
import { instance } from 'api/index';

// components
import ImageChart from 'components/chart/common/ImageChart';
import { useStyles } from 'components/report/material.styles';
import {
  SectionOne,
  SectionTwo,
  SectionThree,
} from 'components/report/Wrapper';

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

const Report: React.FC<RouteComponentProps> = ({
  match,
  location,
  history,
}) => {
  const classes = useStyles();
  // 공통
  const [commonCategoryRatio, setCommonCategoryRatio] = useState([]);
  const [mostVote, setMostVote] = useState([]);
  const [os, setOs] = useState([]);
  const [editor, setEditor] = useState([]);
  // 카테고리
  const [categoryReport, setCategoryReport] = useState([]);

  const [week, setWeek] = useState('현재');

  const handleChangeWeek = (e: React.ChangeEvent<{ value: unknown }>) => {
    // console.log(e.target.value);
    setWeek(e.target.value as string);
  };

  //axios작업
  useEffect(() => {
    instance
      .get('/report/common')
      .then((res) => res.data.data)
      .then((res) => {
        setCategoryReport(res[0].category_report);
        setCommonCategoryRatio(res[0].common_report.all_category_ratio);
        // setMostVote(res[0].common_report.most_vote);
        // setEditor(res[0].common_report.most_vote);
        // setOs(res[0].common_report.most_vote);
      })
      .catch((err) => console.log(err));
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

          {/* section 1-1 시작 */}
          <Title>Vote Top 10</Title>
          <Subtitle>
            스택오버플로우에서 주간 vote수 top10을 가져왔어요.
          </Subtitle>
          <Section>
            <SectionOne></SectionOne>
          </Section>
          {/* section 1-1 끝 */}

          {/* section 1-2 시작 */}
          <Title>Keyword Ratio</Title>
          <Subtitle>키워드 별 빈도수의 비율을 계산했어요.</Subtitle>
          <Section>
            <ImageChart data={commonCategoryRatio} />
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

          {/* section 3 시작 */}
          <Title>요즘뜨는 OO</Title>
          <Subtitle>요즘뜨는 OS, 요즘뜨는 Editor는 무엇이 있을까요?</Subtitle>
          <Section>
            <LazyLoad height={500} offset={100} once>
              <SectionThree></SectionThree>
            </LazyLoad>
          </Section>
          {/* section 3 시작 */}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Report;
