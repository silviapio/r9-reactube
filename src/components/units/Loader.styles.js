import styled from "styled-components";

export const LoaderContainer = styled.div`
  min-height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderRing = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--color-rose);
    border-color: var(--color-rose) var(--color-gray-dark) var(--color-rose) var(--color-gray-dark);
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
