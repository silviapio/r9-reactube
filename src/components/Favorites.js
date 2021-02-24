import { useState } from 'react';
import { useHistory} from 'react-router-dom';
import VideoList from './VideoList';
import syncWithLocalStorage from '../utils/localStorageUtils';
import { updateFavorites } from '../utils/favoritesUtils';

const Favorites = () => {
    const [favorites, setFavorites] = useState(syncWithLocalStorage("favorites"));

    const history = useHistory();

    const handleVideoSelect = myVideoId => {
        history.push(`/videoDetail/${myVideoId}`);
      }
    
    const handleFavRemoval = video => {       
        const newFavorites = updateFavorites(video, favorites);    
        setFavorites(newFavorites);   
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