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
    overflow: hidden;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 650px;
    }
    @media (min-width: 1300px) {
        max-height: 650px;
        max-width: 1100px;
        padding-bottom: 40%;
        iframe {
            max-height: 650px;
        }
    }
`;

export const VideoTextContainer = styled.div`
    margin: 15px 0;
    border-radius: 5px;
    border: 2px solid #dfe0df;
    @media (min-width: 1300px) {
        max-width: 1100px;
    }
    h5 {
        display: block;
        margin: 0;
        padding: 10px;
        font-size: 0.9em;
        font-weight: 400;
    }
    p {
        display: block;
        margin: 0;
        padding: 5px 10px 25px 10px;
        font-size: 0.8em;
        font-weight: 300;
    }
`;
