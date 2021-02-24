import styled from 'styled-components';

export const FavoriteButton = styled.button`
    background-color: ${props => props.isfavorite && "red"};
`;