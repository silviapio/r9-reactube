import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MyGrid, MyRow, MyCol } from './Home.styles';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import SearchHistoryItem from './SearchHistoryItem';
import { getYoutubeResult } from '../services/youtube';
import syncWithLocalStorage from '../utils/localStorageUtils';
import { updateFavorites, isVideoFavorite } from '../utils/favoritesUtils';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [inputSearchBar, setInputSearchBar] = useState("");
  const [userHasSearched, setUserHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState(syncWithLocalStorage("favorites"));
  const [searchHistory, setSearchHistory] = useState(syncWithLocalStorage("savedSearches"));
  const [isRepeatingSearch, setIsRepeatingSearch] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateVideoList(), []);

  useEffect(() => {
    const newVideos = videos.map(video => {
      return {
        ...video,
        isFavorite: isVideoFavorite(video, favorites)
      }
    });
    setVideos(newVideos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);

  useEffect(() => {
    if (isLoading) {
      updateVideoList(inputSearchBar);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, inputSearchBar]);

  useEffect(() => localStorage.setItem("savedSearches", JSON.stringify(searchHistory)), [searchHistory]);

  const repeatSearch = (searchString) => {
    setUserHasSearched(true);
    setInputSearchBar(searchString);
    setIsRepeatingSearch(true);
    setIsLoading(true);
  }

  const updateVideoList = (searchText, mainVideoId) =>
    getYoutubeResult(searchText, mainVideoId)
      .then(response => {
        let videoList = [];
        if (userHasSearched) {
          videoList = response.data.items;
          if (!isRepeatingSearch) {
            const newSearch = {
              searchString: inputSearchBar,
              timeStamp: Date.now(),
              searchedVideos: videoList.slice(0, 2),
            }
            //future reminder: slice array to limit search results
            const newSearchHistory = [...searchHistory];
            newSearchHistory.unshift(newSearch);
            setSearchHistory(newSearchHistory);
          }
        } else {
          videoList = response.data.items.map(videoItem => ({
            ...videoItem,
            id: { videoId: videoItem.id }
          })
          );
        }
        const videoListWithFavorites = videoList.map(video => {
          return {
            ...video,
            isFavorite: isVideoFavorite(video, favorites)
          }
        });
        setVideos(videoListWithFavorites);
        setIsLoading(false);
        setIsRepeatingSearch(false);
      }
      );

  const handleSearchSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    setUserHasSearched(true);
  };

  const handleSearchInputChange = event => {
    setInputSearchBar(event.target.value);
  };

  const history = useHistory();

  const handleVideoSelect = myVideoId => {
    history.push(`/videoDetail/${myVideoId}`);
  };

  const handleFavToggle = video => {
    const newFavorites = updateFavorites(video, favorites);
    setFavorites(newFavorites);
  };

  return (
    <MyGrid fluid>
      <MyRow>
        <MyCol xs={12}>
          <SearchBar
            loading={isLoading}
            inputText={inputSearchBar}
            onSubmit={handleSearchSubmit}
            onChange={handleSearchInputChange}
          />
        </MyCol>
      </MyRow>
      <MyRow>
        <MyCol xs={12}>
          {!isLoading &&
            <VideoList
              loading={isLoading}
              videos={videos}
              onFavToggle={handleFavToggle}
              onSelect={handleVideoSelect}
              header={userHasSearched ? "Search Results" : "Recommended Videos"}
              type="horizontal5"
              className="horizontal5home" />
          }
        </MyCol>
      </MyRow>
      <MyRow>
        <MyCol xs={12} xl={6}>
          {searchHistory.length ?
            !isLoading &&
            <>
              <h5>My recent searches</h5>
              {searchHistory.map((historyEntry, i) =>
                <SearchHistoryItem
                  key={i}
                  searchString={historyEntry.searchString}
                  videos={historyEntry.searchedVideos}
                  timeStamp={historyEntry.timeStamp}
                  onClick={repeatSearch}
                />)}
            </> :
            <h6>No recent searches found...</h6>
          }
        </MyCol>
        <MyCol xs={12} xl={6}>
          {favorites.length ?
            !isLoading &&
            <VideoList
              videos={favorites}
              onSelect={handleVideoSelect}
              onFavToggle={handleFavToggle}
              header="My favorite videos"
              type="favoritesHome"
              className="favoritesHome" /> :
            <h6>No favorites found...</h6>
          }
        </MyCol>
      </MyRow>
    </MyGrid>
  );
}

export default Home;
