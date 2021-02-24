import VideoItem from './VideoItem';
import { VideoListContainer, VideoListOuterContainer } from './VideoList.styles';

function VideoList({onSelect, onFavToggle, header, videos, loading, type}) {
    const handleSelect = key => () => onSelect(key);
    const handleFavToggle = video => event => {
        event.stopPropagation();
        onFavToggle(video);
    };

    const videosToDisplay = (header === "My last search results" || header === "My favorite videos") ? 
    videos.filter(video => video.snippet).slice(0,10) : 
    videos.filter(video => video.snippet).slice(0,5);

    return (
        <VideoListOuterContainer $loading={loading}>
            <p>{header}</p>
        <VideoListContainer favorites={type === "favorites"}>
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