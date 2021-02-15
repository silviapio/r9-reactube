import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body, html {
        box-sizing: border-box;
        min-height: 100vh;
        margin: 0;
        background-color: #f6f6f6;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 1.3rem;
        color: #393e46;
    }
`;