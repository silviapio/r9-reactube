import styled from "styled-components";
import { tabletAndSmaller } from "../../utils/mediaQueries";

export const MenuDiv = styled.nav`
  margin-top: 0.9rem;
  ul {
    list-style: none;
    padding: 0;
  }
  ${tabletAndSmaller} {
    margin-top: 0;
    a {
      margin-left: 10px;
    }
    ul {
      margin: 0;
      font-size: 1.1rem;
      display: flex;
      flex-direction: row-reverse;
    }
  }
`;
