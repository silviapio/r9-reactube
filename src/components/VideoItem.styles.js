import styled from 'styled-components';

const desktopMedium = "@media (min-width: 1200px) and (max-width: 1500px)";

export const VideoItemContainer = styled.div`
    border-bottom: 2px solid #dfe0df;
    display: flex;
    align-items: center;
    padding: 10px 4px;
    img {
        max-width: 60%;
    }
    :first-child {
        padding-top: 0;
    }
    :last-child {
        border-bottom: none;
    }
    :hover{
        cursor: pointer;
    }
    ${desktopMedium} {
        flex-direction: column-reverse;
        align-items: flex-start;
        img {
            max-width: 90%;
        }
    }
`;
export const VideoTitleContainer = styled.div`
    padding: 2px 2px 2px 10px;
    font-size: 0.7em;
    p {
        margin: 0;
    }
    ${desktopMedium} {
        padding: 2px 10px 10px 2px;
        font-size: 0.8em;
        p {
            margin: 0;
        }
    }
`;