import VideoItem from './VideoItem';
import { VideoListContainer, VideoListOuterContainer } from './VideoList.styles';

function VideoList(props) {
    const handleSelect = key => () => props.onSelect(key);
    console.log(props.videos);

    return (
        <VideoListOuterContainer loading={props.loading}>
            <p>{props.header}</p>
        <VideoListContainer favorites={props.type === "favorites"}>
            {props.videos.map(video =>
                <VideoItem
                    key={video.id.videoId}
                    title={video.snippet.title}
                    snippet={video.snippet.thumbnails.medium.url}
                    onSelect={handleSelect(video.id.videoId)}
                />)
            }
        </VideoListContainer>
        </VideoListOuterContainer>
    );
}

export default VideoList;