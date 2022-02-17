import styled from "styled-components";

export const HistoryItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 1px;
  padding: 10px;
  img {
    max-height: 2.5rem;
    border-radius: 5px;
  }

  button {
    margin-left: auto;
    border: none;
    border-radius: 5px;
    width: 35px;
    height: 35px;
    :hover {
      cursor: pointer;
      border: 1px solid var(--color-gray-dark);
    }
    :focus {
      border: 1px solid var(--color-gray-dark);
      outline: none;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 5px;
  p {
    margin: 0 5px;
    font-size: 0.75rem;
    font-weight: 500;
    time {
      font-size: 0.7rem;
    }
  }
  svg {
    margin-left: auto;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
