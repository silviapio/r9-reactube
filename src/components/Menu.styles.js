import styled from 'styled-components';
import {mediumPhone} from '../utils/mediaQueries';

export const MenuDiv = styled.div`
    margin-top: 0.9rem;
    font-size: 0.9em;
    color: #393e46;
    h4 {
        margin: 0;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        padding: 5px 0;
        div {
            display: flex;
            align-items: center;
            h5 {
                margin: 0 0 0 4px;
                padding-top: 2px;
            }
        }
    }
    ${mediumPhone} {
        margin-top: 0;
        ul {
            margin: 0;
            font-size: 1rem;
            display: flex;
            li {
                margin: 0 5px;
                h5 {
                    display: none;
                }
            }
            
        }
    }
`;