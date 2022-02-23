import styled from "styled-components";
import { smallDesktop, desktop } from "../../utils/mediaQueries";

export const NoContentDiv = styled.div`
  margin-left: 6px;
  ${desktop} {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
  ${smallDesktop} {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
`;
