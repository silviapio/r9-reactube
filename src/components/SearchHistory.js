import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import VideoList from './VideoList';

const SearchHistory = () => {

    const [recentlyViewed, setRecentlyViewed] = useState(() => {
        const viewedVideos = localStorage.getItem("viewedVideos");
        return viewedVideos ? JSON.parse(viewedVideos) : []
    })
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : []
      });
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
          const filtered = favorites.filter(favoritesItem => favoritesItem.id.videoId === video.id.videoId);
          video.isFavorite = filtered.length === 1;
        });
        lastSearchedVideos.forEach(video => {
            const filtered = favorites.filter(favoritesItem => favoritesItem.id.videoId === video.id.videoId);
            video.isFavorite = filtered.length === 1;
        });
        setRecentlyViewed([
          ...recentlyViewed
        ]);
        setLastSearchedVideos([
            ...lastSearchedVideos
        ])
      }, [favorites]);

    const history = useHistory();

    const handleVideoSelect = myVideoId => {
        history.push(`/videoDetail/${myVideoId}`);
    }

    const handleFavToggle = video => {       
        let otherVideos = favorites.filter( favoritesItem => favoritesItem.id.videoId !== video.id.videoId);
        if (otherVideos.length === favorites.length) {
          video.isFavorite = true;
          otherVideos.push(video)
        }    
        setFavorites(otherVideos);   
        localStorage.setItem("favorites", JSON.stringify(otherVideos)); 
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
                    />
                    }
                    {lastSearchedVideos.length !== 0 &&
                    <VideoList
                        videos={lastSearchedVideos}
                        onSelect={handleVideoSelect}
                        onFavToggle={handleFavToggle}
                        header="My last searches"
                    />
                    }
                </div>
            }

        </div>
    );
}

export default SearchHistory;