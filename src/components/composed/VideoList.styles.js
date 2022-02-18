import styled from "styled-components";
import { mediumPhone, tablet, smallDesktop, desktop } from "../../utils/mediaQueries";

export const VideoListOuterContainer = styled.div`
  h4 {
    margin: 15px 5px 10px 5px;
  }
  opacity: ${props => (props.loading ? "0.2" : 1)};
  ${smallDesktop} {
    padding-top: 0.7rem;
  }
  ${desktop} {
    padding-top: 0.7rem;
  }
`;

export const VideoListContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${mediumPhone} {
    flex-direction: column;
    img {
      max-width: 60%;
    }
  }
  &.horizontal5home {
    img {
      max-width: 15vw;
      height: auto;
      max-height: 150px;
    }
    ${mediumPhone} {
      flex-direction: column;
      img {
        max-width: 60%;
      }
    }
    ${tablet} {
      flex-direction: row;
      flex-wrap: wrap;
      img {
        max-width: 190px;
      }
    }
    ${smallDesktop} {
      flex-direction: row;
      flex-wrap: wrap;
      img {
        min-width: 190px;
      }
    }
  }
  &.favoritesHome {
    flex-wrap: wrap;
    justify-content: flex-start;
    img {
      max-width: 240px;
    }
  }
  /* &.favoritesPage {
    flex-wrap: wrap;
    justify-content: center;
    img {
      max-width: 24vw;
      height: auto;
    }
    ${mediumPhone} {
      flex-direction: column;
      img {
        max-width: 60%;
      }
    }
    ${tablet} {
      img {
        max-width: 190px;
      }
    }
    ${smallDesktop} {
      min-width: 190px;
    }
  } */
  &.lastSearchesHistoryPage,
  &.recentlyViewedHistoryPage,
  &.favoritesPage {
    flex-wrap: wrap;
    justify-content: flex-start;
    img {
      max-width: 14vw;
      max-height: 150px;
    }
    ${mediumPhone} {
      flex-direction: column;
      padding-left: 4px;
      img {
        max-width: 60%;
      }
    }
    ${tablet} {
      img {
        max-width: 190px;
      }
    }
    ${smallDesktop} {
      img {
        min-width: 90%;
      }
    }
  }
  &.recentlyViewedHistoryPage {
    padding-left: 4px;
  }
  &.video-detail__related-videos {
    padding-left: 2px;
  }
`;
