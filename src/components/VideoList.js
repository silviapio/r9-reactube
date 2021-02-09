import VideoItem from './VideoItem';

function VideoList(props) {
    const handleSelect = key => () => props.onSelect(key);

    return (
        <div>
            {props.videos.map(video =>
                <VideoItem
                    key={video.id.videoId}
                    title={video.snippet.title}
                    snippet={video.snippet.thumbnails.medium.url}
                    onSelect={handleSelect(video.id.videoId)}
                />)
            }
        </div>
    );
}

export default VideoList;