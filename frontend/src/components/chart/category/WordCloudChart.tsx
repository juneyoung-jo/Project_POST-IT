import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';

import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';

import { ChartPropsType } from 'types/report/chartTypes';

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

function WordCloudChart(props: ChartPropsType) {
  // console.log(props.data);
  useLayoutEffect(() => {
    let chart = am4core.create(
      'wordcloud-chart',
      am4plugins_wordCloud.WordCloud,
    );
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

    series.data = props.data;

    // 툴팁에서 보여줄 key:value 쌍
    series.dataFields.word = 'tag';
    series.dataFields.value = 'count';

    // 색 주입
    series.colors = new am4core.ColorSet();
    series.colors.passOptions = {};

    // 스택오버플로우 이동 / 마우스오버 시 툴팁
    series.labels.template.url =
      'https://stackoverflow.com/questions/tagged/{word}';
    series.labels.template.urlTarget = '_blank';
    series.labels.template.tooltipText = '{word}: {value}';

    // 호버 시 색 변화
    let hoverState = series.labels.template.states.create('hover');
    hoverState.properties.fill = am4core.color('#7e0094');

    let title = chart.titles.create();
    title.text = `인기 키워드 빈도수별 단어`;
    title.fontSize = 20;
    title.fontWeight = '700';
    title.marginBottom = 40;
    title.marginTop = 20;

    return () => {
      // dispose를 안해주면 warning뜹니다.
      chart.dispose();
    };
  }, [props]);

  return (
    <div
      id="wordcloud-chart"
      style={{ objectFit: 'cover', width: '100%', height: '500px' }}
    ></div>
  );
}
export default WordCloudChart;
