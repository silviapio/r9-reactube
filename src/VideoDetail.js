function VideoDetail(props) {
    return(
        <div>
            <p>Selected video</p>
            {props.video.etag}
            {/*render here video, decide which props are needed*/}
        </div>
    )
};

export default VideoDetail;