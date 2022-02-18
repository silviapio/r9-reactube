import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { mediumPhone } from "../../utils/mediaQueries";

export const MyGrid = styled(Grid)`
  padding: 1px;
  margin: auto;
  border: none;
  min-height: 100%;
  min-width: 100%;
  box-sizing: border-box;
`;
export const MyRow = styled(Row)`
  min-height: 100%;
  padding: 1px;
  :first-child,
  :last-child {
    border: none;
  }
  margin: 0;
`;
export const MyCol = styled(Col)`
  padding: 1px;
  margin: 0;
  border: none;
  h6 {
    color: var(--color-dark);
  }
  &.sidebarCol {
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
