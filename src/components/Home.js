import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MyGrid, MyRow, MyCol } from './Home.styles';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import SearchHistoryList from './SearchHistoryList';
import { getYoutubeResult } from '../services/youtube';

function App() {
  const [videos, setVideos] = useState([]);
  const [inputSearchBar, setInputSearchBar] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [userHasSearched, setUserHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //shows recommended videos on page upload:
  useEffect(() => updateVideoList(), []);


  useEffect(() => {
    if (isLoading) {
      updateVideoList(inputSearchBar);
    }
  }, [isLoading, inputSearchBar]);

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
  }

  const handleSearchInputChange = event => {
    setInputSearchBar(event.target.value);
  }

  const history = useHistory();

  const handleVideoSelect = myVideoId => {
    console.log(myVideoId);
    history.push(`/videoDetail/${myVideoId}`);
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
