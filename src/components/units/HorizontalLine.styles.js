import styled from "styled-components";

export const StyledHr = styled.hr`
  margin: 0 0.5rem;
  color: #475569;
  &.home__recent-searches__hr--long {
    margin: 0 0.3rem 1rem 0.3rem;
  }
  &.home__recent-searches__hr--dotted {
    border: 1px dashed #475569;
    align-self: center;
  }
`;
