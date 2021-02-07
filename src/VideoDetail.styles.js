import styled from 'styled-components';

export const VideoDetailContainer = styled.div`
    padding-right: 20px;
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
`;

export const VideoTextContainer = styled.div`
    margin: 15px 0;
    border-radius: 5px;
    border: 2px solid #dfe0df;
    h3 {
        display: block;
        margin: 0;
        padding: 20px 10px;
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
