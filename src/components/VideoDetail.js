import { SelectedVideoContainer, VideoDetailContainer, VideoTextContainer } from './VideoDetail.styles';
import FavoriteToggler from './FavoriteToggler';

const VideoDetail = ({ video, video: { id: {videoId}, snippet: {title, description}}, onFavToggle, isFavorite }) => {
    const handleFavToggle = video => () => onFavToggle(video);

    const maxDescriptionLength = 300;

    return (
    <VideoDetailContainer>
        <SelectedVideoContainer>
            <iframe
                title='Youtube player'
                src={`https://youtube.com/embed/${videoId}`}
                width="853"
                height="480"
                frameBorder="0"
                allowFullScreen
            />
        </SelectedVideoContainer>        
        <VideoTextContainer>
        <FavoriteToggler onFavToggle={handleFavToggle(video)} isFavorite={isFavorite} className="favVideoItem" />
            <h5>{title}</h5>
            {description.length > maxDescriptionLength ?
            <p>{`${description.substring(0, maxDescriptionLength)}...`}</p> : 
            <p>{description}</p>
            }            
        </VideoTextContainer>
    </VideoDetailContainer>
);
}

export default VideoDetail;