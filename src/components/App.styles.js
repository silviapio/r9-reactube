import styled, { createGlobalStyle } from 'styled-components';
import { smallTablet, mediumPhone } from '../utils/mediaQueries';

export const GlobalStyle = createGlobalStyle`
    body, html {
        box-sizing: border-box;
        min-height: 100vh;
        margin: 0;
        background-color: #f6f6f6;
        font-family: 'Poppins', sans-serif;
        font-size: 1.3rem;
        color: #393e46;
    }
    a {
        text-decoration: none;
    }
    a, a:visited {
        color: inherit;
    }
`;

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    height: 100vh;
    a:hover, a:active {
        color: #686D76;
    }
    header {
        div {
            display: flex;
            align-items: center;
            h4 {
                margin: 14px 0 14px 0;
            }
        }
    }
    ${smallTablet} {
        header {
            font-size: 1rem;
        }
        li {
            font-size: 0.9rem;
        }
    }
    ${mediumPhone} {
        max-height: 80px;
        padding: 0 0 0 15px;
        border: none;
    }
`;