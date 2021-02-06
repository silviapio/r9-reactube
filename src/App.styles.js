import styled, { createGlobalStyle } from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';


export const GlobalStyle = createGlobalStyle`
    body, html {
        box-sizing: border-box;
        min-height: 100vh;
        margin: 0;
        background-color: #f6f6f6;
        font-family: 'Roboto Condensed', sans-serif;
    }
`;
export const MyGrid = styled(Grid)`
    padding: 1px;
    margin: 0;
    border: 1px solid;
    min-height: 100vh;
    box-sizing: border-box;
`;
export const MyRow = styled(Row)`
    padding: 1px;
    margin: 0;
    border: 1px solid;
`;
export const MyCol = styled(Col)`
    padding: 1px;
    margin: 0;
    border: 1px solid;
`;
