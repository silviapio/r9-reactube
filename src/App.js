import { useEffect, useState } from 'react';
import { GlobalStyle, MyGrid, MyRow, MyCol, ColSearchBox } from './App.styles';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
//import { getSearchResult } from './services/youtube';
//import json as simulation of search response
import mockedData from './services/youtubeSearchResponse.json';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const [inputSearchBar, setInputSearchBar] = useState();

  useEffect (() => {
    const videoList = mockedData.items;
    setVideos(videoList);
    setSelectedVideo(videoList[0]);
  },[])
  
  /*const handleSubmit = () => {
    const searchTerm = "react 17";
    getSearchResult(searchTerm).then( response => {
      setVideos(response.data.items)
    });
  };*/

  //simulation of youtube api search response
  const handleSearchSubmit = event => {
    event.preventDefault();
    const videoList = mockedData.items;
    setVideos(videoList);
    setSelectedVideo(videoList[0]);
    console.log(videoList);
  };

  const handleSearchInputChange = event => setInputSearchBar(event.target.value);

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
          <MyCol xs={12} lg={8}>
            {selectedVideo && <VideoDetail video={selectedVideo} />}
          </MyCol>
          <MyCol xs={12} lg={4}>
            <VideoList videos={videos} onSelect={handleVideoSelect}/>
          </MyCol>
        </MyRow>
    </MyGrid>
  );
};

export default App;
