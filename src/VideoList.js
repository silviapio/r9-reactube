function VideoList(props) {
    return(
        <div>
            <p>Video List</p>
            <p>{/*props.videos*/}</p>
            {/*
            use the map method to generate a list of <VideoItem /> components based on the array props.videos 
            Pass as onClick the App method onSelect and use as parameter the key of <VideoItem />            
            */}
        </div>
    )
};

export default VideoList;