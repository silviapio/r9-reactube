import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import VideoList from "../composed/VideoList";
import HorizontalLine from "../units/HorizontalLine";
import syncWithLocalStorage from "../../utils/localStorageUtils";
import { updateFavorites, isVideoFavorite } from "../../utils/favoritesUtils";

const SearchHistory = () => {
  const [recentlyViewed, setRecentlyViewed] = useState(syncWithLocalStorage("viewedVideos"));
  const [favorites, setFavorites] = useState(syncWithLocalStorage("favorites"));
  const [lastSearchedVideos, setLastSearchedVideos] = useState(() => {
    const localData = localStorage.getItem("savedSearches");
    const videosToDisplay = localData
      ? JSON.parse(localData)
          .map(searchItem => searchItem.searchedVideos)
          .flat()
      : [];
    return videosToDisplay;
  });

  useEffect(() => {
    localStorage.setItem("viewedVideos", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  useEffect(() => {
    const recentlyViewedWithFavorites = recentlyViewed.map(video => {
      return {
        ...video,
        isFavorite: isVideoFavorite(video, favorites),
      };
    });
    const lastSearchedWithFavorites = lastSearchedVideos.map(video => {
      return {
        ...video,
        isFavorite: isVideoFavorite(video, favorites),
      };
    });
    setRecentlyViewed(recentlyViewedWithFavorites);
    setLastSearchedVideos(lastSearchedWithFavorites);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);

  const history = useHistory();

  const handleVideoSelect = myVideoId => {
    history.push(`/videoDetail/${myVideoId}`);
  };

  const handleFavToggle = video => {
    const newFavorites = updateFavorites(video, favorites);
    setFavorites(newFavorites);
  };

  return (
    <div>
      {!recentlyViewed.length && !lastSearchedVideos.length ? null : (
        <div>
          {recentlyViewed.length !== 0 && (
            <>
              <VideoList
                videos={recentlyViewed}
                onSelect={handleVideoSelect}
                onFavToggle={handleFavToggle}
                header="My recently viewed videos"
                className="recentlyViewedHistoryPage"
                type="horizontal5"
              />
              <HorizontalLine />
            </>
          )}
          {lastSearchedVideos.length !== 0 && (
            <VideoList
              videos={lastSearchedVideos}
              onSelect={handleVideoSelect}
              onFavToggle={handleFavToggle}
              header="My last search results"
              headerStyle="lastSearchesHistoryPage"
              className="lastSearchesHistoryPage"
              type="lastSearchesHistoryPage"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchHistory;
