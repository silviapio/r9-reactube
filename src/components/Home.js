import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MyGrid, MyRow, MyCol } from './Home.styles';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import SearchHistoryList from './SearchHistoryList';
import { getYoutubeResult } from '../services/youtube';
import mockedData from '../services/youtubeSearchResponse.json';
import mockedFavorites from '../services/youtubeMostPopularResponse.json';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState();
  const [inputSearchBar, setInputSearchBar] = useState("");
  const [populateWithMockedData] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [userHasSearched, setUserHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /*useEffect:
  delete when populating landing page with real data*/
  useEffect(() => {
      if (populateWithMockedData){
        const videoList = mockedData.items;
        const favoriteSimulation = mockedFavorites.items;
        setVideos(videoList);
        setFavorites(favoriteSimulation);
        /*setSelectedVideo(videoList[0]);*/
      } else {
        updateVideoList();
      }
    }, [populateWithMockedData]
  );

/*shows recommended videos on page upload:
  useEffect (() => updateVideoList(), [])*/

  useEffect (() => {
    if (isLoading) {
      updateVideoList(inputSearchBar);
      setUserHasSearched(true);
    }
  }, [isLoading, inputSearchBar]);

  const updateVideoList = ( searchText, mainVideoId ) =>
    getYoutubeResult(searchText, mainVideoId)
      .then(response => {
        const videoList = response.data.items;
        setVideos(videoList);
        setIsLoading(false);
        /*if (searchText) setSelectedVideo(videoList[0]);*/
      }
  );

  const handleSearchSubmit = event => {
    event.preventDefault();
    setIsLoading(true);    
  }
  
  const handleSearchInputChange = event => {
    setInputSearchBar(event.target.value);
  }

  const history= useHistory();

  const handleVideoSelect = myVideoId => {
    console.log(myVideoId);
    setSelectedVideoId(myVideoId);
    history.push(`/videoDetail`);
  }
  
  return(
    <MyGrid fluid>
        <MyRow>
          <MyCol xs={12}>
            <SearchBar inputText={inputSearchBar} onSubmit={handleSearchSubmit} onChange={handleSearchInputChange} />
          </MyCol>
        </MyRow>
        <MyRow>
          <MyCol xs={12}>
            <VideoList loading={isLoading} videos={videos} header={userHasSearched ? "Search Results" : "Recommended Videos"} onSelect={handleVideoSelect} />
          </MyCol>
        </MyRow>
        <MyRow>
          <MyCol xs={12} xl={6}>
            <SearchHistoryList />
          </MyCol>
          <MyCol xs={12} xl={6}>
            <VideoList type="favorites" videos={favorites} onSelect={handleVideoSelect} header="My favorite videos" />
          </MyCol>
        </MyRow>
    </MyGrid>
  );
}

export default App;
