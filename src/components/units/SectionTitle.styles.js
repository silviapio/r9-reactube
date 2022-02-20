import styled from "styled-components";
import { smallDesktop, desktop } from "../../utils/mediaQueries";

export const TitleContainer = styled.div`
  margin: 5px 5px 5px 10px;
  color: var(--color-dark);
  &.recentlyViewedHistoryPage,
  &.lastSearchesHistoryPage,
  &.favoritesPage,
  &.video-detail__related-videos {
    margin: 5px 5px 5px 14px;
  }
  &.home__recent-searches {
    margin: 5px 5px 5px 11px;
  }
  ${smallDesktop} {
    &.favoritesPage {
      margin-top: 20px;
      text-align: center;
    }
  }
  ${desktop} {
    &.home__favorites__not-found {
      margin-top: 20px;
    }
    &.favoritesPage {
      margin-top: 20px;
      text-align: center;
    }
  }
`;
