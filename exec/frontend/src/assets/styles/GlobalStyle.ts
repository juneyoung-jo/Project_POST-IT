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
    .swal-modal {
        background: linear-gradient(45deg,#2d2839,#312c40);
        color: white;
    }
    .swal-icon {
        &:before {
            content: "";
            display: none;
        }
        &:after {
            content: "";
            display: none;
        }
    }
    .swal-icon.swal-icon--success {
        span {
            background-color: white !important;
        }
        border-color: white !important;

    }
    .swal-icon--success__hide-corners {
        display: none;
    }
    .swal-title, .swal-text {
        color: white;
    }
    .swal-button {
        background-color: #6A59A3;
        &:hover {
            background-color: #524482 !important;
            /* filter: brightness(0.6); */
        }
    }
`;

export default GlobalStyle;
