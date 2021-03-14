import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    *, *:after, *:before {
        font-family: 'Noto Sans KR', 'Open Sans', sans-serif;
        box-sizing: border-box;
    }
    
    html, body {
        width: 100%;
        height: 100vh;
    }

    body{
        padding: 0;
        margin: 0;
    };

    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }

    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #222222        
    }
    ::-webkit-scrollbar-track {
        background-color: #e2e2e2;
    }

    /* noto-sans-kr */
    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('../fonts/noto-sans-KR/NotoSansKR-Light.otf') format('otf'),
        url('../fonts/noto-sans-KR/NotoSansKR-Light.woff2') format('woff2'),
    }
    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('../fonts/noto-sans-KR/NotoSansKR-Regular.otf') format('otf'),
        url('../fonts/noto-sans-KR/NotoSansKR-Regular.woff2') format('woff2'),
    }
    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url('../fonts/noto-sans-KR/NotoSansKR-Medium.otf') format('otf'),
        url('../fonts/noto-sans-KR/NotoSansKR-Medium.woff2') format('woff2'),
    }
    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('../fonts/noto-sans-KR/NotoSansKR-Bold.otf') format('otf'),
        url('../fonts/noto-sans-KR/NotoSansKR-Bold.woff2') format('woff2'),
    }


    /* open-sans-regular */
    @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('../fonts/opensans/OpenSans-Light.ttf') format('ttf'),
        url('../fonts/opensans/OpenSans-Light.woff2') format('woff2'),
    }
    @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('../fonts/opensans/OpenSans-Regular.ttf') format('ttf'),
        url('../fonts/opensans/OpenSans-Regular.woff2') format('woff2'),
    }
    @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('../fonts/opensans/OpenSans-SemiBold.ttf') format('ttf'),
        url('../fonts/opensans/OpenSans-SemiBold.woff2') format('woff2'),
    }
    @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('../fonts/opensans/OpenSans-Bold.ttf') format('ttf'),
        url('../fonts/opensans/OpenSans-Bold.woff2') format('woff2'),
    }

`;

export default GlobalStyle;
