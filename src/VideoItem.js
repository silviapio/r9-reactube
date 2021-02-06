function VideoItem(props) {
    return(
        <div>
            <p>{props.title}</p>
            <img src={props.snippet} />
        </div>
    );
}

export default VideoItem;