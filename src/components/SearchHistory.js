import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import VideoList from './VideoList';
import syncWithLocalStorage from '../utils/localStorageUtils';
import { updateFavorites, isVideoFavorite } from '../utils/favoritesUtils';

const SearchHistory = () => {
    const [recentlyViewed, setRecentlyViewed] = useState(syncWithLocalStorage("viewedVideos"));
    const [favorites, setFavorites] = useState(syncWithLocalStorage("favorites"));
    const [lastSearchedVideos, setLastSearchedVideos] = useState(() => {
        const localData = localStorage.getItem("savedSearches");
        let videosToDisplay;
        if (localData) {
            videosToDisplay = 
                JSON.parse(localData)
                .map(searchItem => searchItem.searchedVideos)
                .flat();
        } else {
            videosToDisplay = [];
        }
        console.log(videosToDisplay);
        return videosToDisplay;
    });
    
    useEffect(() => {localStorage.setItem("viewedVideos", JSON.stringify(recentlyViewed))}, [recentlyViewed]);
    
    useEffect(() => {
        recentlyViewed.forEach(video => {
            video.isFavorite = isVideoFavorite(video, favorites);
        });
        lastSearchedVideos.forEach(video => {
            video.isFavorite = isVideoFavorite(video, favorites);
        });
        setRecentlyViewed([
          ...recentlyViewed
        ]);
        setLastSearchedVideos([
            ...lastSearchedVideos
        ])
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [favorites]);

    const history = useHistory();
    
    const handleVideoSelect = myVideoId => {
        history.push(`/videoDetail/${myVideoId}`);
    }
    
    const handleFavToggle = video => {       
        const newFavorites = updateFavorites(video, favorites);    
        setFavorites(newFavorites);
      }
    
    return (
        <div>
            {recentlyViewed.length === 0 && lastSearchedVideos.length === 0 ?
                <p>No recent history found. Please go back to Home and search for your favorite video!</p> :
                <div>
                    {recentlyViewed.length !== 0 &&
                    <VideoList
                        videos={recentlyViewed}
                        onSelect={handleVideoSelect}
                        onFavToggle={handleFavToggle}
                        header="My recently viewed videos"
                        headerStyle="topHeader"
                    />
                    }
                    {lastSearchedVideos.length !== 0 &&
                    <VideoList
                        videos={lastSearchedVideos}
                        onSelect={handleVideoSelect}
                        onFavToggle={handleFavToggle}
                        header="My last search results"
                        type="lastSearchedVideos"
                    />
                    }
                </div>
            }
        </div>
    );
}

export default SearchHistory;