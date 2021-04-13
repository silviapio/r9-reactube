import VideoItem from './VideoItem';
import { VideoListContainer, VideoListOuterContainer } from './VideoList.styles';

function VideoList({ onSelect, onFavToggle, header, videos, loading, type, headerStyle, className }) {
    const handleSelect = key => () => {
        onSelect(key);
    }
    const handleFavToggle = video => event => {
        event.stopPropagation();
        onFavToggle(video);
    };

    const videosFiltered = videos.filter(video => video.snippet);
    const isXPage = type === "lastSearchesHistoryPage" || type === "favoritesHome";
    const isFavoritesPage = type === "favoritesPage";
    const limit = (isFavoritesPage || isXPage) ? isXPage ? 10 : 0 : 5;
    const videosToDisplay = !limit ? videosFiltered : videosFiltered.slice(0, limit);

    return (
        <VideoListOuterContainer $loading={loading} className={className}>
            { (headerStyle === "topHeader" || headerStyle === "lastSearchesHistoryPage") ? <h4>{header}</h4> :
                <h5>{header}</h5>
            }
            <VideoListContainer className={className} type={type}>
                {videosToDisplay.map(video =>
                    <VideoItem
                        key={video.id.videoId}
                        title={video.snippet.title}
                        snippet={video.snippet.thumbnails.medium.url}
                        onSelect={handleSelect(video.id.videoId)}
                        onFavToggle={handleFavToggle(video)}
                        isFavorite={video.isFavorite}
                        videoOnly={type === "favoritesHome"}
                    />)
                }
            </VideoListContainer>
        </VideoListOuterContainer>
    );
}

export default VideoList;