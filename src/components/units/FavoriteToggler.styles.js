import styled from "styled-components";

export const FavoriteButton = styled.button`
  color: var(--color-rose);
  float: right;
  margin: 2px;
  border: none;
  background-color: var(--color-gray-light);
  border-radius: 5px;
  &:hover {
    color: #d84956;
    font-weight: bolder;
    cursor: pointer;
  }
  &:focus {
    font-weight: bolder;
    outline: none;
    background-color: var(--color-gray-light-hover);
  }
`;
