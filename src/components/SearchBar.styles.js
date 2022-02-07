import styled from 'styled-components';
import { smallTablet, mediumPhone } from '../utils/mediaQueries';

export const InputContainer = styled.div`
    max-width: 650px;
    display: flex;
    justify-content: center;
    padding-top: 14px;
    input {
        width: 100%;
        margin: 0 10px 8px 5px;
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
    ${mediumPhone} {
        padding: 0 13px; 
        input {
            margin: 0;
            padding: 0;
        }
    }
`;