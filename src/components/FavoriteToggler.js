import { FavoriteButton } from './FavoriteToggler.styles';

//reminder: replace F with heart icon when adjusting styles
const FavoriteToggler = ({onFavToggle, isFavorite}) => (
    <FavoriteButton 
    onClick={onFavToggle} 
    isfavorite={isFavorite}>
        F 
    </FavoriteButton>
);

export default FavoriteToggler;