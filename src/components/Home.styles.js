import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

export const MyGrid = styled(Grid)`
    padding: 1px;
    border: 1px solid;
    min-height: 100vh;
    max-width: 95vw;
    box-sizing: border-box;
`;
export const MyRow = styled(Row)`
    padding: 1px;
    border: 1px solid;
    margin: 0;
`;
export const MyCol = styled(Col)`
    padding: 1px;
    margin: 0;
    border: 1px solid;
`;
/*export const ColSearchBox = styled(Col)`
    padding: 5px;
    margin: 0 5px;
    border-radius: 5px;
    border: 2px solid #dfe0df;
`;*/
