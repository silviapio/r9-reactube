import styled, {css} from 'styled-components';
import {mediumPhone} from '../utils/mediaQueries';

export const VideoListOuterContainer = styled.div`
    ${props => props.loading && 
    css`
        opacity: 0.2;
    `}
    h4 {
        margin: 15px 5px 10px 5px;
    }
    h5 {
        margin: 5px 5px 5px 10px;
    }
    border-bottom: ${props => (props.type === "horizontal5" || props.type === "favoritesPage") && "2px solid #dfe0df"};
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
    ${props => props.favorites &&
    css`
        flex-wrap: wrap;
        justify-content: flex-start;
        img {
            max-width: 240px;
        }
    `}
    ${props => props.horizontal5 &&
    css`
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
    `}
    ${props => props.lastSearchResults && css`
        flex-wrap: wrap;
        justify-content: space-between;
        img {
            max-width: 15vw;
            height: auto
        }
        ${mediumPhone} {
            flex-direction: column;
            img {
                max-width: 60%
            }
        }
    `}
    ${props => props.favoritesPage && css`
        flex-wrap: wrap;
        justify-content: flex-start;
        img {
            max-width: 15vw;
            height: auto
        }
        ${mediumPhone} {
            flex-direction: column;
            img {
                max-width: 60%
            }
        }
    `}
`;