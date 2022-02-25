import styled from "styled-components";
import { mediumPhone, tablet, largeDesktop, smallDesktop } from "../../utils/mediaQueries";

export const VideoItemContainer = styled.div`
  padding: 4px;
  border-radius: 5px;
  max-width: 16vw;
  img {
    margin: auto;
    border-radius: 5px;
  }
  :hover {
    cursor: pointer;
    background-color: var(--color-gray-light-hover);
  }
  :last-child {
    margin-bottom: 0.3rem;
  }
  ${largeDesktop} {
    flex-direction: column;
    align-items: center;
    img {
      max-width: 90%;
    }
  }
  ${smallDesktop} {
    min-width: 220px;
  }
  ${tablet} {
    max-width: 200px;
  }
  ${mediumPhone} {
    display: flex;
    max-width: 100%;
    padding-left: 6px;
    padding-right: 6px;
    img {
      max-width: 60%;
    }
  }
  &.favoritesHome {
    max-width: 250px;
    padding: 0 4px;
  }
  &:focus {
    outline: 1px solid var(--color-gray-dark);
    background-color: var(--color-gray-light-hover);
  }
  &.video-item__inner-container {
    ${smallDesktop} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      img {
        margin-left: 2px;
      }
    }
  }
`;

export const VideoOnlyContainer = styled.div`
  position: relative;
  padding: 5px;
  border-radius: 5px;
  img {
    width: 100%;
    height: auto;
    vertical-align: middle;
    border-radius: 5px;
  }
  button {
    position: absolute;
    top: 90%;
    left: 90%;
    transform: translate(-90%, -90%);
    -ms-transform: translate(-90%, -90%);
    background-color: var(--color-gray-light);
    padding: 0 4px;
    border-radius: 10px;
    &:hover {
      background-color: var(--color-gray-light-hover);
    }
    svg {
      max-width: 18px;
      color: var(--color-rose);
    }
  }
`;

export const VideoTitleContainer = styled.div`
  padding: 2px;
  font-size: 0.5em;
  overflow: hidden;
  p {
    margin: 0;
  }
  ${largeDesktop} {
    padding: 5px;
    font-size: 0.5em;
    p {
      margin: 0;
      max-width: 15vw;
    }
  }
  ${mediumPhone} {
    padding: 2px 2px 2px 6px;
    p {
      line-height: 1.4;
    }
  }
`;
