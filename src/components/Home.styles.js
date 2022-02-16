import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { mediumPhone } from '../utils/mediaQueries';

export const MyGrid = styled(Grid)`
    padding: 1px;
    margin: auto;
    border: none;
    min-height: 100%;
    min-width: 100%;
    box-sizing: border-box;
`;
export const MyRow = styled(Row)`
    padding: 1px;
    //border-bottom: 2px solid #dfe0df;
    :first-child, :last-child {
        border: none;
    }
    margin: 0;
`;
export const MyCol = styled(Col)`
    padding: 1px;
    margin: 0;
    border: none;
    h5 {
        margin: 5px 5px 5px 10px;
    }
    &.sidebarCol {
        border-right: 2px solid #dfe0df;
        ${mediumPhone} {
            border-bottom: none;
            border-right: none;
        }
    }
    ${mediumPhone} {
       h6 {
           margin-left: 11px;
       } 
    }
    &.col__search-history {
        padding-top: 0.5rem;
    }
`;

export const StyledHr = styled.hr`
    margin: 0 0.5rem;
    color: #dfe0df;
`;