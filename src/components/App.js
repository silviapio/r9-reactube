import { useEffect, useState } from 'react';
import { GlobalStyle, MyGrid, MyRow, MyCol, ColSearchBox } from './App.styles';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import { getSearchResult } from '../services/youtube';

//import mocked data for populating page on render and for simulation of youtube api search response:
import mockedData from '../services/youtubeSearchResponse.json';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const [inputSearchBar, setInputSearchBar] = useState("");
  /*populateWithMockedData:
  if set to TRUE, populates landing page with mocked data
  if set to FALSE, populates landing page with real search results (keywords: "react 17 features")*/
  const [populateWithMockedData] = useState(true);

  /*useEffect:
  delete if populating landing page is not needed*/
  useEffect(() => {
      if (populateWithMockedData){
        const videoList = mockedData.items;
        setVideos(videoList);
        setSelectedVideo(videoList[0]);
      } else {
        searchAndUpdatePage("react 17 features")
      }
    }, [populateWithMockedData]
  );

  const searchAndUpdatePage = searchText =>
    getSearchResult(searchText)
      .then(response => {
        const videoList = response.data.items;
        setVideos(videoList);
        setSelectedVideo(videoList[0]);
      });

  const handleSearchSubmit = event => {
    event.preventDefault();
    searchAndUpdatePage(inputSearchBar);
  }

  const handleSearchInputChange = event => {
    setInputSearchBar(event.target.value);
    
  }

  const handleVideoSelect = selectedVideoId => {
    console.log(selectedVideoId);
    setSelectedVideo(videos.filter(video => video.id.videoId === selectedVideoId)[0]);
  }
  
  return(
    <MyGrid fluid>
      <GlobalStyle />
        <MyRow>
          <ColSearchBox xs={12}>
            <SearchBar inputText={inputSearchBar} onSubmit={handleSearchSubmit} onChange={handleSearchInputChange} />
          </ColSearchBox>
        </MyRow>
        <MyRow>
          <MyCol xs={12} xl={8}>
            {selectedVideo && <VideoDetail video={selectedVideo} />}
          </MyCol>
          <MyCol xs={12} xl={4}>
            <VideoList videos={videos} onSelect={handleVideoSelect}/>
          </MyCol>
        </MyRow>
    </MyGrid>
  );
};

export default App;
