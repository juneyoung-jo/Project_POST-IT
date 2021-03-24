import React from 'react';
import {
  BarChart,
  ImageChart,
  NetworkMap,
  WordCloudChart,
} from 'components/chart/ChartWrapper';
function ChartTest() {
  return (
    <div>
      <BarChart />
      <ImageChart />
      <NetworkMap />
      <WordCloudChart />
    </div>
  );
}

export default ChartTest;
