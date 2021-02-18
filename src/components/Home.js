import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MyGrid, MyRow, MyCol } from './Home.styles';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import SearchHistoryItem from './SearchHistoryItem';
import { getYoutubeResult } from '../services/youtube';

function App() {
  const [videos, setVideos] = useState([]);
  const [inputSearchBar, setInputSearchBar] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [userHasSearched, setUserHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState(() => {
    const localData = localStorage.getItem("saved searches");
    return localData ? JSON.parse(localData) : [];
  });

  //shows recommended videos on page upload:
  useEffect(() => updateVideoList(), []);

  useEffect(() => {
    videos.forEach(video => {
      const filtered = favorites.filter(favoritesItem => favoritesItem.id.videoId === video.id.videoId);
      video.isFavorite = filtered.length === 1;
    });
    setVideos([
      ...videos
    ]);
  }, [favorites]);

  useEffect(() => {
    if (isLoading) {
      updateVideoList(inputSearchBar);
    }
  }, [isLoading, inputSearchBar]);

  useEffect(() => {localStorage.setItem("savedSearches", JSON.stringify(searchHistory))}, [searchHistory]);

  const updateVideoList = (searchText, mainVideoId) =>
    getYoutubeResult(searchText, mainVideoId)
      .then(response => {
        let videoList = [];
        if (userHasSearched) {
          videoList = response.data.items;
        } else {
          videoList = response.data.items.map(videoItem => ({
            ...videoItem,
            id: { videoId: videoItem.id }
          })
          );
        }
        setVideos(videoList);
        setIsLoading(false);
      }
      );

  const handleSearchSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    setUserHasSearched(true);
    setSearchHistory([
      ...searchHistory,
      inputSearchBar
    ]);
  }

  const handleSearchInputChange = event => {
    setInputSearchBar(event.target.value);
  }

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
  }


  return (
    <MyGrid fluid>
      <MyRow>
        <MyCol xs={12}>
          <SearchBar inputText={inputSearchBar} onSubmit={handleSearchSubmit} onChange={handleSearchInputChange} />
        </MyCol>
      </MyRow>
      <MyRow>
        <MyCol xs={12}>
          <VideoList 
            loading={isLoading} 
            videos={videos} 
            onFavToggle={handleFavToggle} 
            onSelect={handleVideoSelect}
            header={userHasSearched ? "Search Results" : "Recommended Videos"}  />
        </MyCol>
      </MyRow>
      <MyRow>
        <MyCol xs={12} xl={6}>
          {searchHistory.length === 0 ?
            <div><p>No recent searches found. Try with your first one!</p></div> :
            !isLoading &&
              <div>
                <p>My recent searches</p>
                {searchHistory.map( string => <SearchHistoryItem searchText={string} /> )}
              </div>
          }
        </MyCol>
        <MyCol xs={12} xl={6}>
          <VideoList 
            type="favorites" 
            videos={favorites} 
            onSelect={handleVideoSelect} 
            onFavToggle={handleFavToggle}
            header="My favorite videos" />
        </MyCol>
      </MyRow>
    </MyGrid>
  );
}

export default App;
