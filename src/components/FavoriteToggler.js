import { FavoriteButton } from './FavoriteToggler.styles';

const FavoriteToggler = (props) => (
    <FavoriteButton onClick={props.onFavToggle} isfavorite={props.isFavorite} >F</FavoriteButton>
);

export default FavoriteToggler;