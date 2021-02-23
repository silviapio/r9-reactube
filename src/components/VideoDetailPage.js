import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import { getSingleVideoInfo, getYoutubeResult } from '../services/youtube';
import { MyGrid, MyRow } from './Home.styles';

const VideoDetailPage = () => {
    const [myVideo, setMyVideo] = useState();
    const [videos, setVideos] = useState([]);
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : []
      });
    const [recentlyViewed, setRecentlyViewed] = useState(() => {
        const viewedVideos = localStorage.getItem("viewedVideos");
        return viewedVideos ? JSON.parse(viewedVideos) : []
    })

    const { id } = useParams();

    useEffect(() => {localStorage.setItem("viewedVideos", JSON.stringify(recentlyViewed))}, [recentlyViewed]);

    useEffect(() => {
        getSingleVideoInfo(id)
        .then((response) => {
            const videoToDisplay = response.data.items[0];
            videoToDisplay.id = {videoId: videoToDisplay.id}; //solves youtube inconsistency in id object (single search response)
            videoToDisplay.isFavorite = isVideoFavorite(videoToDisplay.id.videoId);
            setMyVideo(videoToDisplay);
            //reminder: slice array to limit storage
            if (!wasVideoDisplayedAlready(videoToDisplay.id.videoId)) {
                const updatedVideos = [
                    ...recentlyViewed,
                ]
                updatedVideos.unshift(videoToDisplay);
                setRecentlyViewed(updatedVideos);
            }
        getYoutubeResult(null, videoToDisplay.id.videoId)
        .then((response) => {
            const videoList = response.data.items;
            console.log(videoList[0].id.videoId)
            videoList.forEach(video => video.isFavorite = isVideoFavorite(video.id.videoId));
            setVideos(videoList);
        });
        }); 
    }, [id]);

    const wasVideoDisplayedAlready = myVideoId => {
        let videoFound = recentlyViewed.filter(recentlyViewedItem => recentlyViewedItem.id.videoId === myVideoId);
        return videoFound.length === 1;
    }

    const isVideoFavorite = myVideoId => {
        let videoFound = favorites.filter(favoritesItem => favoritesItem.id.videoId === myVideoId);
        return videoFound.length === 1;
    } 

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

    const handleFavToggle = video => {
        let otherVideos = favorites.filter(favoritesItem => favoritesItem.id.videoId !== video.id.videoId);
        if (otherVideos.length === favorites.length) {
            video.isFavorite = true;
            otherVideos.push(video)
        } else { video.isFavorite = false }
        setFavorites(otherVideos);
        localStorage.setItem("favorites", JSON.stringify(otherVideos));
        console.log("favorites:" + JSON.stringify(otherVideos));
    }; 
    
    return(
        <MyGrid fluid>
            { !myVideo ?
            <div /> :
            <div>
            <MyRow>
                <VideoDetail video={myVideo} isFavorite={myVideo.isFavorite} onFavToggle={handleFavToggle} />
            </MyRow>
            <MyRow>
                <VideoList 
                    header="Related videos" 
                    videos={videos} 
                    onSelect={handleVideoSelection}
                    onFavToggle={handleFavToggle}
                 />
            </MyRow>
            </div>}
        </MyGrid>
      );
};

export default VideoDetailPage;