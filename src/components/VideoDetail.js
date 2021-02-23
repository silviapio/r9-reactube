import { SelectedVideoContainer, VideoDetailContainer, VideoTextContainer } from './VideoDetail.styles';
import FavoriteToggler from './FavoriteToggler';

const VideoDetail = ({ video, onFavToggle, isFavorite }) => {
    /*const { video: { id: {videoId}, snippet: {title, description}} } = props; */
    const handleFavToggle = video => () => onFavToggle(video);

    const maxDescriptionLength = 300;

    return (<VideoDetailContainer>
        <SelectedVideoContainer>
            <iframe
                title='Youtube player'
                src={`https://youtube.com/embed/${video.id.videoId}`}
                width="853"
                height="480"
                frameBorder="0"
                allowFullScreen
            />
        </SelectedVideoContainer>
        <FavoriteToggler onFavToggle={handleFavToggle(video)} isFavorite={isFavorite} className="favVideoItem" />
        <VideoTextContainer>
            <h3>{video.snippet.title}</h3>
            {video.snippet.description.length > maxDescriptionLength ?
            <p>{`${video.snippet.description.substring(0, maxDescriptionLength)}...`}</p> : 
            <p>{video.snippet.description}</p>
            }
            
        </VideoTextContainer>
    </VideoDetailContainer>
);
}

export default VideoDetail;