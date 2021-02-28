import styled, { createGlobalStyle } from 'styled-components';

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
    padding: 15px 0 0 15px;
    height: 100vh;
    border-right: 2px solid #dfe0df;
    a:hover, a:active {
        color: #686D76;
    }
    header {
        display: flex;
        align-items: center;
        h4 {
            margin: 0 0 0 4px;
        }
    }
`;