import { VideoItemContainer, VideoTitleContainer, VideoOnlyContainer } from "./VideoItem.styles";
import FavoriteToggler from "../units/FavoriteToggler";

const VideoItem = ({ onSelect, snippet, title, onFavToggle, isFavorite, videoOnly }) => (
  <VideoItemContainer onClick={onSelect} className={videoOnly ? "videoOnly" : null}>
    {videoOnly ? (
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
