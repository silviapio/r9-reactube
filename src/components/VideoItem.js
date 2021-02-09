import { VideoItemContainer, VideoTitleContainer } from './VideoItem.styles';

const VideoItem = ({ onSelect, snippet, title }) => (
    <VideoItemContainer onClick={onSelect}>
        <img alt="video snippet" src={snippet} />
        <VideoTitleContainer>
            <p>{title}</p>
        </VideoTitleContainer>
    </VideoItemContainer>
);

export default VideoItem;