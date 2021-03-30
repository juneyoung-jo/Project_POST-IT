import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';

import am4themes_animated from '@amcharts/amcharts4/themes/animated';
// import am4themes_dark from '@amcharts/amcharts4/themes/dark';

// am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

function NetworkMap() {
  useLayoutEffect(() => {
    let chart = am4core.create(
      'networkmap',
      am4plugins_forceDirected.ForceDirectedTree,
    );
    let networkSeries = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries(),
    );

    chart.data = [
      {
        name: '언어',
        children: [
          {
            name: 'Python', // 카테고리 8~10개
            children: [
              // 형태소 3~5개
              { name: 'django', value: 275 },
              { name: 'flask', value: 188 },
              { name: 'Tornado', value: 133 },
            ],
          },
          {
            name: 'Java',
            children: [
              { name: 'Spring', value: 384 },
              { name: 'STRUTS', value: 267 },
            ],
          },
          {
            name: 'Javascript',
            children: [
              { name: 'react', value: 415 },
              { name: 'angular', value: 148 },
              { name: 'vue', value: 89 },
            ],
          },
          {
            name: 'database',
            children: [
              { name: 'mysql', value: 155 },
              { name: 'sqlite3', value: 66 },
              { name: 'mongoDB', value: 189 },
            ],
          },
          {
            name: 'C++',
            value: 487,
          },
          {
            name: 'golang',
            value: 355,
          },
          {
            name: 'Typescript',
            value: 321,
          },
        ],
      },
    ];

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
    networkSeries.minRadius = 8;
    networkSeries.maxRadius = 65;

    // 연결 링크 두께, 선명도
    let hoverState = networkSeries.links.template.states.create('hover');
    hoverState.properties.strokeWidth = 3;
    hoverState.properties.strokeOpacity = 1;

    networkSeries.nodes.template.events.on('over', function (event) {
      event.target.dataItem.childLinks.each(function (link) {
        link.isHover = true;
      });
      if (event.target.dataItem.parentLink) {
        event.target.dataItem.parentLink.isHover = true;
      }
    });

    networkSeries.nodes.template.events.on('out', function (event) {
      event.target.dataItem.childLinks.each(function (link) {
        link.isHover = false;
      });
      if (event.target.dataItem.parentLink) {
        event.target.dataItem.parentLink.isHover = false;
      }
    });

    return () => {
      // dispose를 안해주면 warning뜹니다. 아래를 참고했습니다.
      // https://www.amcharts.com/docs/v4/tutorials/chart-was-not-disposed/#React
      chart.dispose();
    };
  }, []);

  return <div id="networkmap" style={{ width: '100%', height: '500px' }}></div>;
}
export default NetworkMap;
