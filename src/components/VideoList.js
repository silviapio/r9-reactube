import VideoItem from './VideoItem';
import { VideoListContainer, VideoListOuterContainer } from './VideoList.styles';

function VideoList({onSelect, onFavToggle, header, videos, loading, type, headerType}) {
    const handleSelect = key => () => {onSelect(key);
        console.log(key)}
    const handleFavToggle = video => event => {
        event.stopPropagation();
        onFavToggle(video);
    };

    let videosToDisplay;
    if ((header === "My last search results" || type === "favoritesHome" ) ){ 
        videosToDisplay = videos.filter(video => video.snippet).slice(0,10) }
        else if  (header === "All my favorite videos"){
            videosToDisplay = videos.filter(video => video.snippet);
        }else{
            videosToDisplay = videos.filter(video => video.snippet).slice(0,5);
        }

    return (
        <VideoListOuterContainer $loading={loading}>
            {(headerType === "topElement" || header === "My last search results") ? 
            <h4>{header}</h4> :
            <h5>{header}</h5>
            }
        <VideoListContainer 
        favoritesHome={type === "favoritesHome"} 
        horizontal5={type === "horizontal5"} 
        favoritesPage= {type === "favoritesPage"} 
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