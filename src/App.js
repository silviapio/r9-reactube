import { useState } from 'react';
import { GlobalStyle, MyGrid, MyRow, MyCol } from './App.styles';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import { getSearchResult } from './services/youtube';
//import json as simulation of search response
import mockedData from './services/youtubeSearchResponse.json';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [inputSearchBar, setInputSearchBar] = useState();

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
    console.log(videoList);
  };

  const handleSearchInputChange = event => setInputSearchBar(event.target.value);

  const handleVideoSelect = videoId => setSelectedVideo(videos.filter(video => video.etag === videoId)[0]);
  
  return(
    <MyGrid fluid>
      <GlobalStyle />
        <MyRow>
          <MyCol xs={12}>
            <SearchBar inputText={inputSearchBar} onSubmit={handleSearchSubmit} onChange={handleSearchInputChange} />
          </MyCol>
        </MyRow>
        <MyRow>
          <MyCol xs={12} lg={9}>
            <VideoDetail video={selectedVideo} />
          </MyCol>
          <MyCol xs={12} lg={3}>
            <VideoList videos={videos} onSelect={handleVideoSelect}/>
          </MyCol>
        </MyRow>
    </MyGrid>
  );
};

export default App;
