import { VideoItemContainer, VideoTitleContainer } from './VideoItem.styles';

const VideoItem = props => (
    <VideoItemContainer onClick={props.onSelect}>
        <img alt="video snippet" src={props.snippet} />
        <VideoTitleContainer>
            <p>{props.title}</p>
        </VideoTitleContainer>
    </VideoItemContainer>
);

export default VideoItem;