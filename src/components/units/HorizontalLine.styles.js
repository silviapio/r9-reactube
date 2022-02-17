import styled from "styled-components";

export const StyledHr = styled.hr`
  margin: 0 0.5rem;
  border: none;
  background-color: var(--color-rose);
  height: 2px;
  &.home__recent-searches__hr--long {
    margin: 0 0.3rem 1rem 0.3rem;
  }
  &.home__recent-searches__hr--dotted {
    border: 1px dashed var(--color-gray-dark);
    background-color: transparent;
    align-self: center;
  }
`;
