import styled, {css} from 'styled-components';

export const VideoListOuterContainer = styled.div`
    ${props => props.loading && 
    css`
        opacity: 0.2;
    `}
`;
export const VideoListContainer = styled.div`
    display: flex;
    flex-direction: row;
    ${props => props.favorites &&
    css`
        flex-wrap: wrap;
    `}
`;