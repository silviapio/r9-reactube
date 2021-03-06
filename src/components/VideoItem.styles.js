import styled from 'styled-components';
import {mediumPhone, smallTablet} from '../utils/mediaQueries';

const desktopMedium = "@media (min-width: 1200px) and (max-width: 1500px)";

export const VideoItemContainer = styled.div`
    padding: 10px 4px;
    border-radius: 5px;
    max-width: 16vw;
    img {
        width: 95%;
        margin: auto;
    }
    :hover{
        cursor: pointer;
        background-color: #D8E0DF;
        opacity: 0.9;
    } 
    ${desktopMedium} {
        flex-direction: column;
        align-items:center;
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
        color: #D89fa4;
    }
`;

export const VideoTitleContainer = styled.div`
    padding: 2px;
    font-size: 0.5em;
    p {
        margin: 0;
    }
    ${desktopMedium} {
        padding: 5px;
        font-size: 0.5em;
        p {
            margin: 0;
            max-width: 15vw;
        }
    }
`;