import VideoItem from './VideoItem';
import { VideoListContainer, VideoListOuterContainer } from './VideoList.styles';

function VideoList({onSelect, onFavToggle, header, videos, loading, type, headerStyle, className}) {
    const handleSelect = key => () => {onSelect(key);
        console.log(key)}
    const handleFavToggle = video => event => {
        event.stopPropagation();
        onFavToggle(video);
    };

    let videosToDisplay;
    if ((header === "My last search results" || type === "favoritesHome" ) ){ 
        videosToDisplay = videos.filter(video => video.snippet).slice(0,10) }
        else if  (type === "favoritesPage"){
            videosToDisplay = videos.filter(video => video.snippet);
        }else{
            videosToDisplay = videos.filter(video => video.snippet).slice(0,5);
        }

    return (
        <VideoListOuterContainer $loading={loading}>
            { headerStyle === "topHeader" && <h4>{header}</h4> }
            {header === "My last search results" &&
            <h5>{header}</h5>
            }
        <VideoListContainer 
        favoritesHome={type === "favoritesHome"} 
        className={className}
        horizontal5={type === "horizontal5"} 
        lastSearchResults={header === "My last search results"}>
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