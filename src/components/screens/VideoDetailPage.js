import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoDetail from "../units/VideoDetail";
import VideoList from "../composed/VideoList";
import { getSingleVideoInfo, getYoutubeResult } from "../../services/youtube";
import syncWithLocalStorage from "../../utils/localStorageUtils";
import { updateFavorites, isVideoFavorite } from "../../utils/favoritesUtils";
import { MyGrid, MyRow } from "./Home.styles";

const VideoDetailPage = () => {
  const [myVideo, setMyVideo] = useState();
  const [videos, setVideos] = useState([]);
  const [favorites, setFavorites] = useState(syncWithLocalStorage("favorites"));
  const [recentlyViewed, setRecentlyViewed] = useState(syncWithLocalStorage("viewedVideos"));

  const { id } = useParams();

  useEffect(() => localStorage.setItem("viewedVideos", JSON.stringify(recentlyViewed)), [recentlyViewed]);

  useEffect(() => {
    getSingleVideoInfo(id).then(response => {
      const videoToDisplay = response.data.items[0];
      videoToDisplay.id = { videoId: videoToDisplay.id }; //solves youtube inconsistency in id object (single search response)
      videoToDisplay.isFavorite = isVideoFavorite(videoToDisplay, favorites);
      setMyVideo(videoToDisplay);
      if (!wasVideoDisplayedAlready(videoToDisplay.id.videoId)) {
        const updatedVideos = [videoToDisplay, ...recentlyViewed];
        setRecentlyViewed(updatedVideos);
      }
      getYoutubeResult(null, videoToDisplay.id.videoId).then(response => {
        const videoListWithFavorites = response.data.items.map(video => {
          return { ...video, isFavorite: isVideoFavorite(video, favorites) };
        });
        setVideos(videoListWithFavorites);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const wasVideoDisplayedAlready = myVideoId =>
    recentlyViewed.filter(({ id }) => id.videoId === myVideoId).length === 1;

  const handleVideoSelection = myVideoId => {
    setMyVideo(videos.filter(video => video.id.videoId === myVideoId)[0]);
    getYoutubeResult(null, myVideoId).then(response => {
      const videoList = response.data.items;
      setVideos(videoList);
    });
  };

  const handleFavToggle = video => {
    const newFavorites = updateFavorites(video, favorites);
    setFavorites(newFavorites);
  };

  return (
    <MyGrid fluid>
      {!myVideo ? (
        <div />
      ) : (
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
        </div>
      )}
    </MyGrid>
  );
};

export default VideoDetailPage;
