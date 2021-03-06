import styled from 'styled-components';

export const VideoDetailContainer = styled.div`
    padding-right: 20px;
    @media (max-width: 1200px) {
        padding-right: 0;
    }
`;

export const SelectedVideoContainer = styled.div`
    position: relative;  
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    @media (min-width: 900px) {
        max-width: 83vw;
    }
`;

export const VideoTextContainer = styled.div`
    margin: 15px 0;
    border-radius: 5px;
    border: 2px solid #dfe0df;
    @media (min-width: 900px) {
        max-width: 83vw;
    }
    h5 {
        display: block;
        margin: 0;
        padding: 5px;
        font-size: 0.9rem;
        font-weight: 400;
    }
    p {
        display: block;
        margin: 0;
        padding: 2px 5px 5px 5px;
        font-size: 0.7rem;
        font-weight: 300;
    }
`;
