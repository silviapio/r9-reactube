import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import { getSingleVideoInfo, getYoutubeResult } from '../services/youtube';
import { MyGrid, MyRow } from './Home.styles';

const VideoDetailPage = () => {
    const [myVideo, setMyVideo] = useState();
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getSingleVideoInfo(id)
        .then((response) => {
            const videoToDisplay = response.data.items[0];
            videoToDisplay.id = {videoId: videoToDisplay.id};
            setMyVideo(videoToDisplay);
        getYoutubeResult(null, videoToDisplay.id.videoId)
        .then((response) => {
            const videoList = response.data.items;
            setVideos(videoList);
        });
        }); 
    }, [id]);

    const handleVideoSelection = myVideoId => {
        console.log(myVideoId);
        setMyVideo(videos.filter(video => video.id.videoId === myVideoId)[0]);
        getYoutubeResult(null, myVideoId)
        .then((response) =>{
            const videoList = response.data.items;
            setVideos(videoList);
            console.log(response);
        });
    };
    
    return(
        <MyGrid fluid>
            { !myVideo ?
            <div /> :
            <div>
            <MyRow>
                <p>{myVideo.id.videoId}</p>
                <VideoDetail video={myVideo} />
            </MyRow>
            <MyRow>
                <VideoList header="Related videos" videos={videos} onSelect={handleVideoSelection} />
            </MyRow>
            </div>}
        </MyGrid>
      );
};

export default VideoDetailPage;