import styled, { createGlobalStyle } from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

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
export const MyGrid = styled(Grid)`
    padding: 1px;
    margin: auto;
    min-height: 100vh;
    max-width: 85vw;
    box-sizing: border-box;
`;
export const MyRow = styled(Row)`
    padding: 5px;
    margin: 0;
`;
export const MyCol = styled(Col)`
    padding: 5px;
    margin: 0;
`;
export const ColSearchBox = styled(Col)`
    padding: 5px;
    margin: 0 5px;
    border-radius: 5px;
    border: 2px solid #dfe0df;
`;
