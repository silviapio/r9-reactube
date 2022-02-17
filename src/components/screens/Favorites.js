import { useState } from "react";
import { useHistory } from "react-router-dom";
import VideoList from "../composed/VideoList";
import SectionTitle from "../units/SectionTitle";
import syncWithLocalStorage from "../../utils/localStorageUtils";
import { updateFavorites } from "../../utils/favoritesUtils";

const Favorites = () => {
  const [favorites, setFavorites] = useState(syncWithLocalStorage("favorites"));

  const history = useHistory();

  const handleVideoSelect = myVideoId => history.push(`/videoDetail/${myVideoId}`);

  const handleFavRemoval = video => {
    const newFavorites = updateFavorites(video, favorites);
    setFavorites(newFavorites);
  };

  return favorites.length !== 0 ? (
    <VideoList
      videos={favorites}
      onSelect={handleVideoSelect}
      onFavToggle={handleFavRemoval}
      header="All my favorite videos"
      className="favoritesPage"
    />
  ) : (
    <SectionTitle text="No favorites found ¯\_(ツ)_/¯" className="favoritesPage" />
  );
};

export default Favorites;
