import styled from 'styled-components';

export const HistoryItemContainer = styled.div`
    display: flex;
    margin: 5px 0;
    padding: 10px;
    border-bottom: 2px solid #dfe0df;
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
        border-radius: 5px;
        :hover {
            cursor: pointer;
            background-color: #D8E0DF;
        }
    }
    
`;