import styled from "styled-components";
import { desktop } from "../../utils/mediaQueries";

export const VideoDetailContainer = styled.div`
  margin: 0 14px;
  padding-right: 0;
  ${desktop} {
    padding-right: 20px;
  }
`;

export const SelectedVideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 5px;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  ${desktop} {
    max-width: 83vw;
  }
`;

export const VideoTextContainer = styled.div`
  margin: 15px 0;
  ${desktop} {
    max-width: 83vw;
  }
  h5 {
    display: block;
    margin: 0;
    font-size: 0.9rem;
    font-weight: 400;
  }
  p {
    display: block;
    margin: 0;
    padding: 2px 0 5px 0;
    font-size: 0.7rem;
    font-weight: 300;
  }
`;
