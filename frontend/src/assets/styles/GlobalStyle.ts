import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body {
        width: 100%;
        height: 100vh;
    }

    body {
        background-color: #2d2839;
    }

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
        color: inherit;
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background: #6a59a3;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: #434343;
        border-radius: 10px;
    }
`;

export default GlobalStyle;
