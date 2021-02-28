import { FavoriteButton } from './FavoriteToggler.styles';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const FavoriteToggler = ({onFavToggle, isFavorite}) => (
    <FavoriteButton 
    onClick={onFavToggle} 
    isfavorite={isFavorite}>
        {isFavorite ? 
        <FaHeart/> :
        <FaRegHeart/>
        }
    </FavoriteButton>
);

export default FavoriteToggler;