import { SelectedVideoContainer, VideoDetailContainer, VideoTextContainer } from './VideoDetail.styles';

const VideoDetail = ({ video: { id: {videoId}, snippet: {title, description}} }) => (
    /*const { video: { id: {videoId}, snippet: {title, description}} } = props; */
    <VideoDetailContainer>
        <SelectedVideoContainer>
            <iframe
                title='Youtube player'
                src={`https://youtube.com/embed/${videoId}`}
                width="853"
                height="480"
                frameBorder="0"
                allowFullScreen
            />
        </SelectedVideoContainer>
        <VideoTextContainer>
            <h3>{title}</h3>
            <p>{description}</p>
        </VideoTextContainer>
    </VideoDetailContainer>
);

export default VideoDetail;