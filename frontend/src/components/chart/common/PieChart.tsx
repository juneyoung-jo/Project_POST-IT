/* Imports */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { useLayoutEffect } from 'react';
import { Iprops } from 'types/report/chartTypes';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

function PieChart(props: Iprops) {
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

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'litres';
    pieSeries.dataFields.category = 'country';
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id={props.chartId} style={{ width: '100%', height: '500px' }}></div>
  );
}

export default PieChart;
