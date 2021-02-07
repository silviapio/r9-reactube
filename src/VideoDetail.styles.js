import styled from 'styled-components';

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

export const SelectedVideoTitle = styled.p`
    font-size: 1.5rem;
`;
