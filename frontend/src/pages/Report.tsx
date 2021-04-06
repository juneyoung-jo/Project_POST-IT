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

// 주차별 옵션
const weeks: string[] = [];

const Report = () => {
  const classes = useStyles();
  // const [data, setData] = useState([] as any[]);

  // 공통
  const [allCategoryRatio, setAllCategoryRatio] = useState([]);
  const [mostVote, setMostVote] = useState([]);

  // 카테고리
  const [categoryReport, setCategoryReport] = useState([{}]);

  const [date, setDate] = useState('');

  const handleChangeWeek = (e: React.ChangeEvent<{ value: unknown }>) => {
    setDate(e.target.value as string);
  };

  //axios작업
  useLayoutEffect(() => {
    let cancel = false;
    const getData = async () => {
      const response = await getReport();
      const data = response.data.data;
      // console.log(response, data);
      setCategoryReport(data[0].category_report);
      if (categoryReport && cancel) {
        return;
      }

      setMostVote(data[0].common_report.most_vote);
      setAllCategoryRatio(data[0].common_report.all_category_ratio);
    };
    getData();
    // getReport()
    //   .then((res) => {
    //     setMostVote(res.data.data[0].common_report.most_vote);
    //     setAllCategoryRatio(res.data.data[0].common_report.all_category_ratio);
    //     setCategoryReport(res.data.data[0].category_report);
    //   })
    //   .catch((err) => console.log(err));

    return () => {
      cancel = true;
      // setAllCategoryRatio([]);
      // setCategoryReport([]);
      // setMostVote([]);
      // setDate('');
    };
  }, [setCategoryReport]);
  console.log(categoryReport);

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
            <SectionOne data={mostVote}></SectionOne>
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
          <LazyLoad height={200} offset={100} once>
            <Section>
              <SectionTwo data={categoryReport}></SectionTwo>;
            </Section>
          </LazyLoad>

          {/* section 2(카테고리별) 끝 */}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Report;
