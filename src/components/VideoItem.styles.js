import styled from 'styled-components';

export const VideoItemContainer = styled.div`
    border-bottom: 2px solid #dfe0df;
    display: flex;
    align-items: center;
    padding: 10px 4px;
    :first-child {
        padding-top: 0;
    }
    :last-child {
        border-bottom: none;
    }
    :hover{
        cursor: pointer;
    }
`;
export const VideoTitleContainer = styled.div`
    padding: 2px 2px 2px 4px;
    font-size: 0.8em;
`;