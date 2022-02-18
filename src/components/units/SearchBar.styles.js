import styled from "styled-components";
import { mediumPhone, tablet, smallDesktop, desktop } from "../../utils/mediaQueries";

export const InputContainer = styled.div`
  max-width: 740px;
  display: flex;
  justify-content: center;
  padding: 18px 5px 0px 7px;
  input {
    width: 100%;
    padding-left: 3px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid var(--color-gray-dark);
    font-size: 0.7em;
    font-family: inherit;
    font-weight: 400;
    ::placeholder {
      color: var(--collor-gray-light);
    }
    :focus {
      outline: 1px solid var(--color-gray-dark);
      box-shadow: 0 3px 10px rgb(30 41 59 / 0.2);
    }
  }
  ${mediumPhone} {
    padding: 0 13px 0 11px;
    input {
      margin: 0;
    }
  }
  ${tablet} {
    padding: 0 11px;
  }
  ${smallDesktop} {
    padding: 18px 5px 0px 10px;
    margin: 0 auto;
  }
  ${desktop} {
    padding: 18px 5px 0px 10px;
  }
`;
