import { SelectedVideoContainer, SelectedVideoTitle } from './VideoDetail.styles';

function VideoDetail(props) {

    return(
        <div>
            <SelectedVideoContainer>
            <iframe
                title='Youtube player'
                src={`https://youtube.com/embed/${props.video.id.videoId}`} 
                width="853"
                height="480"
                frameBorder="0"
                allowFullScreen
                />
            {/*render here video, decide which props are needed*/}
            </SelectedVideoContainer>
            <SelectedVideoTitle>{props.video.snippet.title}</SelectedVideoTitle>
            <p>{props.video.snippet.description}</p>
        </div>
    )
};

export default VideoDetail;