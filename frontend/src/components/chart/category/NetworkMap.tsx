import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';

import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';

// types
import { ChartPropsType } from 'types/report/chartTypes';

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

function NetworkMap(props: ChartPropsType) {
  // console.log(props.data);
  useLayoutEffect(() => {
    let chart = am4core.create(
      'networkmap',
      am4plugins_forceDirected.ForceDirectedTree,
    );
    let networkSeries = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries(),
    );

    chart.data = props.data;

    networkSeries.dataFields.value = 'value';
    networkSeries.dataFields.name = 'name';
    networkSeries.dataFields.children = 'children';
    networkSeries.nodes.template.tooltipText = '{name}: {value}';
    networkSeries.nodes.template.fillOpacity = 1;

    networkSeries.nodes.template.label.text = '{name}';
    networkSeries.fontFamily = 'Circular Std, Noto Sans KR';

    // 노드 사이 거리
    networkSeries.links.template.distance = 1.5;
    networkSeries.links.template.strokeWidth = 1;
    // 노드 크기 비율
    networkSeries.minRadius = 20;
    networkSeries.maxRadius = 45;

    // 연결 링크 두께, 선명도
    let hoverState = networkSeries.links.template.states.create('hover');
    hoverState.properties.strokeWidth = 3;
    hoverState.properties.strokeOpacity = 1;

    let title = chart.titles.create();
    title.text = `키워드 네트워크 맵`;
    title.fontSize = 20;
    title.fontWeight = '700';
    title.marginBottom = 40;
    title.marginTop = 20;

    return () => {
      // dispose를 안해주면 warning뜹니다. 아래를 참고했습니다.
      // https://www.amcharts.com/docs/v4/tutorials/chart-was-not-disposed/#React
      chart.dispose();
    };
  }, [props]);

  return <div id="networkmap" style={{ width: '100%', height: '500px' }}></div>;
}
export default NetworkMap;
