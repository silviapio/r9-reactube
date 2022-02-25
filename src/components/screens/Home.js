import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MyGrid, MyRow, MyCol, RecentSearchesContainer } from "./Home.styles";
import SearchBar from "../units/SearchBar";
import VideoList from "../composed/VideoList";
import SearchHistoryItem from "../units/SearchHistoryItem";
import SectionTitle from "../units/SectionTitle";
import HorizontalLine from "../units/HorizontalLine";
import Loader from "../units/Loader";
import { getYoutubeResult } from "../../services/youtube";
import syncWithLocalStorage from "../../utils/localStorageUtils";
import { updateFavorites, isVideoFavorite } from "../../utils/favoritesUtils";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [inputSearchBar, setInputSearchBar] = useState("");
  const [userHasSearched, setUserHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState(syncWithLocalStorage("favorites"));
  const [searchHistory, setSearchHistory] = useState(syncWithLocalStorage("savedSearches"));
  const [isRepeatingSearch, setIsRepeatingSearch] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    updateVideoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newVideos = videos.map(video => {
      return {
        ...video,
        isFavorite: isVideoFavorite(video, favorites),
      };
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

  const repeatSearch = searchString => {
    setUserHasSearched(true);
    setInputSearchBar(searchString);
    setIsRepeatingSearch(true);
    setIsLoading(true);
  };

  const updateVideoList = (searchText, mainVideoId) =>
    getYoutubeResult(searchText, mainVideoId).then(response => {
      let videoList = [];
      if (userHasSearched) {
        videoList = response.data.items;
        if (!isRepeatingSearch) {
          const newSearch = {
            searchString: inputSearchBar,
            timeStamp: Date.now(),
            searchedVideos: videoList.slice(0, 2),
          };
          //future reminder: slice array to limit search results
          const newSearchHistory = [...searchHistory];
          newSearchHistory.unshift(newSearch);
          setSearchHistory(newSearchHistory);
        }
      } else {
        videoList = response.data.items.map(videoItem => ({
          ...videoItem,
          id: { videoId: videoItem.id },
        }));
      }
      const videoListWithFavorites = videoList.map(video => {
        return {
          ...video,
          isFavorite: isVideoFavorite(video, favorites),
        };
      });
      setVideos(videoListWithFavorites);
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
      setIsRepeatingSearch(false);
    });

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
          {!isLoading ? (
            <VideoList
              loading={isLoading}
              videos={videos}
              onFavToggle={handleFavToggle}
              onSelect={handleVideoSelect}
              header={userHasSearched ? "Search Results" : "Recommended Videos"}
              className="horizontal5home"
            />
          ) : (
            <Loader />
          )}
        </MyCol>
      </MyRow>
      <HorizontalLine />
      <MyRow>
        <MyCol xs={12} xl={6} className="col__search-history">
          {searchHistory.length ? (
            !isLoading && (
              <RecentSearchesContainer>
                <SectionTitle text="My recent searches" className="home__recent-searches" />
                {searchHistory.map((historyEntry, i) => (
                  <div key={i}>
                    <SearchHistoryItem
                      searchString={historyEntry.searchString}
                      videos={historyEntry.searchedVideos}
                      timeStamp={historyEntry.timeStamp}
                      onClick={repeatSearch}
                    />
                    <HorizontalLine
                      className={
                        i === searchHistory.length - 1
                          ? "home__recent-searches__hr--long"
                          : "home__recent-searches__hr--dotted"
                      }
                    />
                  </div>
                ))}
              </RecentSearchesContainer>
            )
          ) : (
            <RecentSearchesContainer>
              <SectionTitle text="No recent searches found ¯\_(ツ)_/¯" className="home__recent-searches__not-found" />
            </RecentSearchesContainer>
          )}
        </MyCol>
        <MyCol xs={12} xl={6} className="col__favorites">
          {favorites.length ? (
            !isLoading && (
              <VideoList
                videos={favorites}
                onSelect={handleVideoSelect}
                onFavToggle={handleFavToggle}
                header="My favorite videos"
                className="favoritesHome"
              />
            )
          ) : (
            <SectionTitle text="No favorites found ¯\_(ツ)_/¯" className="home__favorites__not-found" />
          )}
        </MyCol>
      </MyRow>
    </MyGrid>
  );
};

export default Home;
