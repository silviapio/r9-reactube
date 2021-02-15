import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import { getSingleVideoInfo, getYoutubeResult } from '../services/youtube';
import { MyGrid, MyRow } from './Home.styles';
import mockedData from '../services/youtubeRelatedToResponse.json';

const VideoDetailPage = () => {
    const [myVideo, setMyVideo] = useState();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getSingleVideoInfo("cIMM0-HyDH8")
        .then((response) => {
            const videoToDisplay = response.data.items[0];
            videoToDisplay.id = {videoId: videoToDisplay.id};
            setMyVideo(videoToDisplay);
        getYoutubeResult(null, videoToDisplay.id.videoId)
        .then((response) =>{
            const videoList = response.data.items;
            setVideos(videoList);
        });
        }); 
    }, []);

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

    /*const handleVideoSelection = myVideoId  => {
        console.log("video:" + videos.filter(video => video.id.videoId === myVideoId)[0].id.videoId);
        setMyVideo(videos.filter(video => video.id.videoId === myVideoId)[0]);
        const newVideoList = mockedData.items;
        setVideos(newVideoList);
        console.log(newVideoList);
    }*/
    
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