import styled, { createGlobalStyle } from "styled-components";
import { tabletAndSmaller } from "../utils/mediaQueries";

export const GlobalStyle = createGlobalStyle`
    body, html {
        box-sizing: border-box;
        min-height: 100vh;
        margin: 0;
        font-size: 1.3rem;
    }
    html {
        --color-rose: #F43F5E;
        --color-dark: #1E293B;
        --color-gray-dark: #475569;
        --color-gray-light: #F1F5F9;
        --color-gray-light-hover: #D8DCE0;
        --color-white: #FFFFFF;
        --color-danger: #EF4444;
        --color-red-dark: #9F1239;
    }
    body {
        background-color: var(--color-gray-light);
        color: var(--color-gray-dark);
        font-family: 'Lato', sans-serif;
        font-size: 1.3rem;
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
  padding-top: 1rem;
  max-height: 100vh;
  a:hover,
  a:active {
    color: #686d76;
  }
  header {
    div {
      display: flex;
      align-items: center;
    }
  }
  ${tabletAndSmaller} {
    flex-direction: row;
    justify-content: space-between;
    max-height: 80px;
    padding: 15px 15px;
    border: none;
  }
`;

export const LogoIcon = styled.img`
  max-height: 1.5rem;
`;

export const LogoWords = styled.img`
  height: 1rem;
  margin-left: 0.3rem;
`;
