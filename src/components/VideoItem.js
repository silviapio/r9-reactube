import { VideoItemContainer, VideoTitleContainer } from './VideoItem.styles';
import FavoriteToggler from './FavoriteToggler';

const VideoItem = ({ onSelect, snippet, title, onFavToggle, isFavorite }) => (
    <VideoItemContainer onClick={onSelect}>
        <img alt="video snippet" src={snippet} />
        <VideoTitleContainer>
            <p>{title}</p>
            <FavoriteToggler onFavToggle={onFavToggle} isFavorite={isFavorite} className="favVideoItem"/>
        </VideoTitleContainer>
    </VideoItemContainer>
);

export default VideoItem;