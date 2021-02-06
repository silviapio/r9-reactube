import VideoItem from './VideoItem';

function VideoList(props) {

    const handleSelect = key => () => props.onSelect(key);

      return (
        <div>
            {props.videos.map(video =>
                <VideoItem
                    key={video.etag}
                    title={video.snippet.title}
                    snippet={video.snippet.thumbnails.default.url}
                    onSelect={handleSelect(video.etag)}
                />)
            }
        </div>
    )
};

export default VideoList;