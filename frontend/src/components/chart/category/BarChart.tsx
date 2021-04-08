import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';

// types
import { ChartPropsType } from 'types/report/chartTypes';

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

function BarChart(props: ChartPropsType) {
  useLayoutEffect(() => {
    // create chart
    let chart = am4core.create('bar-chart', am4charts.XYChart);

    // Y축
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = 'word';
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    // X축
    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.strictMinMax = true; // 반응형으로 min, max를 설정해줍니다.

    // 데이터 연결(차트 유형 별로 관련 시리즈가 따로 존재함)
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = 'word';
    series.dataFields.valueX = 'count';
    series.tooltipText = '{valueX.value}';
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;

    // 내부 label
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.horizontalCenter = 'left';
    labelBullet.label.dx = 10; // 라벨 text의 margin
    labelBullet.label.text =
      "{values.valueX.workingValue.formatNumber('#.0as')}"; // 소숫점 자리
    labelBullet.locationX = 1;

    // 정렬
    categoryAxis.sortBySeries = series;

    chart.data = props.data;

    let title = chart.titles.create();
    title.text = `주간 인기 키워드`;
    title.fontSize = 20;
    title.fontWeight = '700';
    title.marginBottom = 40;

    return () => {
      // dispose를 안해주면 warning뜹니다.
      chart.dispose();
    };
  }, [props]);

  return (
    <div
      id="bar-chart"
      style={{ width: '100%', height: '500px', objectFit: 'cover' }}
    ></div>
  );
}
export default BarChart;
