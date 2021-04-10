/* Imports */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { useLayoutEffect } from 'react';
import { ChartPropsType } from 'types/report/chartTypes';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

function PieChart(props: ChartPropsType) {
  useLayoutEffect(() => {
    // Create chart instance
    let chart = am4core.create(props.chartId, am4charts.PieChart);
    // Add data
    chart.data = [
      {
        country: 'Lithuania',
        litres: 501.9,
      },
      {
        country: 'Czechia',
        litres: 301.9,
      },
      {
        country: 'Ireland',
        litres: 201.1,
      },
      {
        country: 'Germany',
        litres: 165.8,
      },
      {
        country: 'Australia',
        litres: 139.9,
      },
      {
        country: 'Austria',
        litres: 128.3,
      },
      {
        country: 'UK',
        litres: 99,
      },
    ];
    chart.innerRadius = am4core.percent(40);
    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'litres';
    pieSeries.dataFields.category = 'country';
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.labels.template.disabled = true;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    chart.hiddenState.properties.radius = am4core.percent(0);

    // chart legend
    chart.legend = new am4charts.Legend();
    chart.legend.fontSize = '12';
    chart.legend.position = 'right';
    chart.legend.marginTop = 40;
    chart.legend.marginBottom = 40;

    // chart title
    let title = chart.titles.create();
    title.text = `${props.category} 키워드 빈도수`;
    title.fontSize = 20;
    title.fontWeight = '700';
    title.marginTop = 40;
    title.marginBottom = 40;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id={props.chartId} style={{ width: '100%', height: '400px' }}></div>
  );
}

export default PieChart;
