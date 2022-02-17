import { VideoItemContainer, VideoTitleContainer, VideoOnlyContainer } from "./VideoItem.styles";
import FavoriteToggler from "../units/FavoriteToggler";

const VideoItem = ({ onSelect, snippet, title, onFavToggle, isFavorite, className }) => (
  <VideoItemContainer onClick={onSelect} className={className}>
    {className === "favoritesHome" ? (
      <VideoOnlyContainer>
        <img alt="video snippet" src={snippet} />
        <FavoriteToggler onFavToggle={onFavToggle} isFavorite={isFavorite} />
      </VideoOnlyContainer>
    ) : (
      <VideoItemContainer>
        <img alt="video snippet" src={snippet} />
        <VideoTitleContainer>
          <FavoriteToggler onFavToggle={onFavToggle} isFavorite={isFavorite} />
          <p>{title}</p>
        </VideoTitleContainer>
      </VideoItemContainer>
    )}
  </VideoItemContainer>
);

export default VideoItem;
