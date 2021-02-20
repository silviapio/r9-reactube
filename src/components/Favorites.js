import { useState } from 'react';
import { useHistory} from 'react-router-dom';
import VideoList from './VideoList';

const Favorites = () => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : []
    });

    const history = useHistory();
    const handleVideoSelect = myVideoId => {
        history.push(`/videoDetail/${myVideoId}`);
      }

    const handleFavRemoval = video => {       
        let otherVideos = favorites.filter( favoritesItem => favoritesItem.id.videoId !== video.id.videoId);    
        setFavorites(otherVideos);   
        localStorage.setItem("favorites", JSON.stringify(otherVideos)); 
      }
    
    return (
        <div>
            <VideoList
            videos={favorites} 
            onSelect={handleVideoSelect} 
            onFavToggle={handleFavRemoval}
            header="My favorite videos" />
        </div>
    );
}

export default Favorites;