import VideoItem from './VideoItem';
import { VideoListContainer, VideoListOuterContainer } from './VideoList.styles';

function VideoList(props) {
    const handleSelect = key => () => props.onSelect(key);
    const handleFavToggle = video => event => {
        event.stopPropagation();
        props.onFavToggle(video);
    };

    const videosToDisplay = props.videos.filter(video => video.snippet).slice(0,5);

    return (
        <VideoListOuterContainer $loading={props.loading}>
            <p>{props.header}</p>
        <VideoListContainer favorites={props.type === "favorites"}>
            {videosToDisplay.map(video =>
                <VideoItem
                    key={video.id.videoId}
                    title={video.snippet.title}
                    snippet={video.snippet.thumbnails.medium.url}
                    onSelect={handleSelect(video.id.videoId)}
                    onFavToggle={handleFavToggle(video)}
                    isFavorite={video.isFavorite}
                />)
            }
        </VideoListContainer>
        </VideoListOuterContainer>
    );
}

export default VideoList;