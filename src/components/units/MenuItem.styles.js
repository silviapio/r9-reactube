import styled from "styled-components";
import { mediumPhone, tabletAndSmaller } from "../../utils/mediaQueries";

export const MenuListItem = styled.li`
  padding: 5px 0;
`;

export const MenuInnerContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--color-dark);
  ${mediumPhone} {
    font-size: 1.1rem;
  }
`;

export const MenuHeading = styled.h2`
  margin: 0 0 0 4px;
  font-size: 1rem;
  ${tabletAndSmaller} {
    display: none;
  }
`;
