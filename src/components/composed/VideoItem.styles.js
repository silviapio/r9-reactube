import styled from "styled-components";
import { mediumPhone, smallTablet, mediumDesktop } from "../../utils/mediaQueries";

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
    background-color: #d8e0df;
    opacity: 0.9;
  }
  :last-child {
    margin-bottom: 0.3rem;
  }
  ${mediumDesktop} {
    flex-direction: column;
    align-items: center;
    img {
      max-width: 90%;
    }
  }
  ${smallTablet} {
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
  &.videoOnly {
    max-width: 250px;
    padding: 0 4px;
  }
`;

export const VideoOnlyContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
    vertical-align: middle;
    padding: 5px;
  }
  span {
    position: absolute;
    top: 90%;
    left: 90%;
    transform: translate(-90%, -90%);
    -ms-transform: translate(-90%, -90%);
    font-size: 0.9rem;
    color: #d89fa4;
  }
`;

export const VideoTitleContainer = styled.div`
  padding: 2px;
  font-size: 0.5em;
  overflow: hidden;
  p {
    margin: 0;
  }
  ${mediumDesktop} {
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
