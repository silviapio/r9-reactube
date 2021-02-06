import styled from 'styled-components';

export const VideoItemContainer = styled.div`
    border-bottom: 1px solid;
    display: flex;
    align-items: center;
    padding: 2px;
    :last-child {
        border-bottom: none;
    }
    :hover{
        cursor: pointer;
    }
`;
export const VideoTitleContainer = styled.div`
    padding: 2px 2px 2px 4px;
    font-size: 0.7rem;
`;