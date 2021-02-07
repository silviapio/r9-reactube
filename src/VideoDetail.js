import { SelectedVideoContainer, VideoDetailContainer, VideoTextContainer } from './VideoDetail.styles';

function VideoDetail(props) {

    return(
        <VideoDetailContainer>
            <SelectedVideoContainer>
            <iframe
                title='Youtube player'
                src={`https://youtube.com/embed/${props.video.id.videoId}`} 
                width="853"
                height="480"
                frameBorder="0"
                allowFullScreen
                />
            </SelectedVideoContainer>
            <VideoTextContainer>
            <h3>{props.video.snippet.title}</h3>
            <p>{props.video.snippet.description}</p>
            </VideoTextContainer>
        </VideoDetailContainer>
    )
};

export default VideoDetail;