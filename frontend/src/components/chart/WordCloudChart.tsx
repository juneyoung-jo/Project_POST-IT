import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';

import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';

import { Iprops } from 'types/report/chartTypes';

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

function WordCloudChart(props: Iprops) {
  useLayoutEffect(() => {
    let chart = am4core.create(
      'wordcloud-chart',
      am4plugins_wordCloud.WordCloud,
    );
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;
    series.rotationThreshold = 0.5;

    series.data = [
      {
        tag: 'javascript',
        count: '1765836',
      },
      {
        tag: 'java',
        count: '1517355',
      },
      {
        tag: 'c#',
        count: '1287629',
      },
      {
        tag: 'php',
        count: '1263946',
      },
      {
        tag: 'android',
        count: '1174721',
      },
      {
        tag: 'python',
        count: '1116769',
      },
      {
        tag: 'jquery',
        count: '944983',
      },
      {
        tag: 'html',
        count: '805679',
      },
      {
        tag: 'c++',
        count: '606051',
      },
      {
        tag: 'ios',
        count: '591410',
      },
      {
        tag: 'css',
        count: '574684',
      },
      {
        tag: 'mysql',
        count: '550916',
      },
      {
        tag: 'sql',
        count: '479892',
      },
      {
        tag: 'asp.net',
        count: '343092',
      },
      {
        tag: 'ruby-on-rails',
        count: '303311',
      },
      {
        tag: 'c',
        count: '296963',
      },
      {
        tag: 'arrays',
        count: '288445',
      },
      {
        tag: 'objective-c',
        count: '286823',
      },
      {
        tag: '.net',
        count: '280079',
      },
      {
        tag: 'r',
        count: '277144',
      },
      {
        tag: 'node.js',
        count: '263451',
      },
      {
        tag: 'angularjs',
        count: '257159',
      },
      {
        tag: 'json',
        count: '255661',
      },
      {
        tag: 'sql-server',
        count: '253824',
      },
      {
        tag: 'swift',
        count: '222387',
      },
      {
        tag: 'iphone',
        count: '219827',
      },
      {
        tag: 'regex',
        count: '203121',
      },
      {
        tag: 'ruby',
        count: '202547',
      },
      {
        tag: 'ajax',
        count: '196727',
      },
      {
        tag: 'django',
        count: '191174',
      },
      {
        tag: 'excel',
        count: '188787',
      },
      {
        tag: 'xml',
        count: '180742',
      },
      {
        tag: 'asp.net-mvc',
        count: '178291',
      },
      {
        tag: 'linux',
        count: '173278',
      },
      {
        tag: 'angular',
        count: '154447',
      },
      {
        tag: 'database',
        count: '153581',
      },
      {
        tag: 'wpf',
        count: '147538',
      },
      {
        tag: 'spring',
        count: '147456',
      },
      {
        tag: 'wordpress',
        count: '145801',
      },
      {
        tag: 'python-3.x',
        count: '145685',
      },
      {
        tag: 'vba',
        count: '139940',
      },
      {
        tag: 'string',
        count: '136649',
      },
      {
        tag: 'xcode',
        count: '130591',
      },
      {
        tag: 'windows',
        count: '127680',
      },
      {
        tag: 'reactjs',
        count: '125021',
      },
      {
        tag: 'vb.net',
        count: '122559',
      },
      {
        tag: 'html5',
        count: '118810',
      },
      {
        tag: 'eclipse',
        count: '115802',
      },
      {
        tag: 'multithreading',
        count: '113719',
      },
      {
        tag: 'mongodb',
        count: '110348',
      },
      {
        tag: 'laravel',
        count: '109340',
      },
      {
        tag: 'bash',
        count: '108797',
      },
      {
        tag: 'git',
        count: '108075',
      },
      {
        tag: 'oracle',
        count: '106936',
      },
      {
        tag: 'pandas',
        count: '96225',
      },
      {
        tag: 'postgresql',
        count: '96027',
      },
      {
        tag: 'twitter-bootstrap',
        count: '94348',
      },
      {
        tag: 'forms',
        count: '92995',
      },
      {
        tag: 'image',
        count: '92131',
      },
      {
        tag: 'macos',
        count: '90327',
      },
      {
        tag: 'algorithm',
        count: '89670',
      },
      {
        tag: 'python-2.7',
        count: '88762',
      },
      {
        tag: 'scala',
        count: '86971',
      },
      {
        tag: 'visual-studio',
        count: '85825',
      },
      {
        tag: 'list',
        count: '84392',
      },
      {
        tag: 'excel-vba',
        count: '83948',
      },
      {
        tag: 'winforms',
        count: '83600',
      },
      {
        tag: 'apache',
        count: '83367',
      },
      {
        tag: 'facebook',
        count: '83212',
      },
      {
        tag: 'matlab',
        count: '82452',
      },
      {
        tag: 'performance',
        count: '81443',
      },
      {
        tag: 'css3',
        count: '78250',
      },
      {
        tag: 'entity-framework',
        count: '78243',
      },
      {
        tag: 'hibernate',
        count: '76123',
      },
      {
        tag: 'typescript',
        count: '74867',
      },
      {
        tag: 'linq',
        count: '73128',
      },
      {
        tag: 'swing',
        count: '72333',
      },
      {
        tag: 'function',
        count: '72043',
      },
      {
        tag: 'amazon-web-services',
        count: '71155',
      },
      {
        tag: 'qt',
        count: '69552',
      },
      {
        tag: 'rest',
        count: '69138',
      },
      {
        tag: 'shell',
        count: '68854',
      },
      {
        tag: 'azure',
        count: '67431',
      },
      {
        tag: 'firebase',
        count: '66411',
      },
      {
        tag: 'api',
        count: '66158',
      },
      {
        tag: 'maven',
        count: '66113',
      },
      {
        tag: 'powershell',
        count: '65467',
      },
      {
        tag: '.htaccess',
        count: '65014',
      },
      {
        tag: 'sqlite',
        count: '64888',
      },
      {
        tag: 'file',
        count: '62783',
      },
      {
        tag: 'codeigniter',
        count: '62393',
      },
      {
        tag: 'unit-testing',
        count: '61909',
      },
      {
        tag: 'perl',
        count: '61752',
      },
      {
        tag: 'loops',
        count: '61015',
      },
      {
        tag: 'symfony',
        count: '60820',
      },
      {
        tag: 'selenium',
        count: '59855',
      },
      {
        tag: 'google-maps',
        count: '59616',
      },
      {
        tag: 'csv',
        count: '59600',
      },
      {
        tag: 'uitableview',
        count: '59011',
      },
      {
        tag: 'web-services',
        count: '58916',
      },
      {
        tag: 'cordova',
        count: '58195',
      },
      {
        tag: 'class',
        count: '58055',
      },
      {
        tag: 'numpy',
        count: '57132',
      },
      {
        tag: 'google-chrome',
        count: '56836',
      },
      {
        tag: 'ruby-on-rails-3',
        count: '55962',
      },
      {
        tag: 'android-studio',
        count: '55801',
      },
      {
        tag: 'tsql',
        count: '55736',
      },
      {
        tag: 'validation',
        count: '55531',
      },
    ];

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

    // let subtitle = chart.titles.create();
    // subtitle.text = '(click to open)';

    let title = chart.titles.create();
    title.text = `"${props.category}" 키워드`;
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
