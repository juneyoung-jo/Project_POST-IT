import { createGlobalStyle } from 'styled-components';

import NotoSansKR from './NotoSansKR-Bold.otf';
import NotoSansKR2 from './NotoSansKR-Medium.otf';
import OpenSans from './OpenSans.ttf';
import OpenSans2 from './OpenSans.woff2';
import CircularStd from './CircularStd-Medium.woff2';
import CircularStd2 from './CircularStd-Medium.woff';
import CircularStd3 from './CircularStd-Medium.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Noto Sans KR';
        src: local('Noto Sans KR Medium'), local('Noto Sans KR Bold'),
        url(${NotoSansKR}) format('otf'),
        url(${NotoSansKR2}) format('otf');
        font-weight: 400;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: 'OpenSans';
        src: local('OpenSans'),
        url(${OpenSans}) format('ttf'),
        url(${OpenSans2}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std Medium'),
            url(${CircularStd}) format('woff2'),
            url(${CircularStd2}) format('woff'),
            url(${CircularStd3}) format('ttf');
        font-weight: 500;
        font-style: normal;
        font-display: fallback;
}
`;
