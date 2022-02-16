import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FavoriteButton } from "./FavoriteToggler.styles";

const FavoriteToggler = ({ onFavToggle, isFavorite }) => (
  <FavoriteButton onClick={onFavToggle} isfavorite={isFavorite}>
    {isFavorite ? <FaHeart /> : <FaRegHeart />}
  </FavoriteButton>
);

export default FavoriteToggler;
