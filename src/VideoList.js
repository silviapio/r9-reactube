import VideoItem from './VideoItem';

function VideoList(props) {
    const renderedVideos = props.videos.map(video => 
        <VideoItem 
            key={video.etag} 
            title={video.snippet.title} 
            snippet={video.snippet.thumbnails.default.url} 
            onSelect={props.onSelect}
        />);
    
    return(
        <div>
            <p>Video List</p>
            {renderedVideos}
        </div>
    )
};

export default VideoList;