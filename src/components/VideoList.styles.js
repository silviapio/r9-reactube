import styled from 'styled-components';
import { mediumPhone, smallTablet } from '../utils/mediaQueries';

export const VideoListOuterContainer = styled.div`
    h4 {
        margin: 15px 5px 10px 5px;
    }
    opacity: ${props => props.loading ? "0.2" : 1};
    &.recentlyViewedHistoryPage {
        border-bottom: 2px solid #dfe0df;
    } 
`;

export const VideoListContainer = styled.div`
    display: flex;
    flex-direction: row;
    ${mediumPhone} {
        flex-direction: column;
        img {
            max-width: 60%
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
                max-width: 60%
            }
        }
        ${smallTablet} {
            flex-direction: row;
            flex-wrap: wrap;
            img {
                max-width: 190px;
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
    &.favoritesPage {
        flex-wrap: wrap;
        justify-content: center;
        img {
            max-width: 24vw;
            height: auto
        }
        ${mediumPhone} {
            flex-direction: column;
            img {
                max-width: 60%
            }
        }
        ${smallTablet} {
            img {
                max-width: 190px;
            }
        }
    }
    &.lastSearchesHistoryPage, &.recentlyViewedHistoryPage {
        flex-wrap: wrap;
        justify-content: flex-start;
        img {
            max-width: 14vw;
            max-height: 150px;
        }
        ${mediumPhone} {
            flex-direction: column;
            img {
                max-width: 60%
            }
        }
        ${smallTablet} {
            img {
                max-width: 190px;
            }
        }
    }
    &.recentlyViewedHistoryPage {
        padding-left: 4px; 
    }
`;