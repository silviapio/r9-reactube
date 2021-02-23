import styled from 'styled-components';

export const HistoryItemContainer = styled.div`
    display: flex;
    margin: 15px 0;
    padding: 0 10px;
    img {
        max-height: 40px;
    }
    p {
        margin: 5px 10px 0 10px;
        font-size: 1rem;
        time {
            font-size: 0.8rem;
        }
    }
    button {
        margin-left: auto;
    }
    
`;