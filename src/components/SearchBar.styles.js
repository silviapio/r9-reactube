import styled from 'styled-components';

export const SearchBarText = styled.div`
    padding: 15px 10px;
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    input {
        width: 100%;
        margin: 5px 10px;
        min-height: 1.3rem;
        border-radius: 5px;
        border: 2px solid #dfe0df;
        font-size: 0.7em;
        font-family: inherit;
        font-weight: 300;
        ::placeholder {
            color: #dfe0df;
        }
        :focus {
            outline: none;
        }
    }
`;