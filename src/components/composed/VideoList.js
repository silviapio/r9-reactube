import VideoItem from "./VideoItem";
import SectionTitle from "../units/SectionTitle";
import { VideoListContainer, VideoListOuterContainer } from "./VideoList.styles";

function VideoList({ onSelect, onFavToggle, header, videos, loading, className }) {
  const handleSelect = key => () => {
    onSelect(key);
  };
  const handleFavToggle = video => event => {
    event.stopPropagation();
    onFavToggle(video);
  };

  const videosFiltered = videos.filter(video => video.snippet);
  const isXPage = className === "lastSearchesHistoryPage" || className === "favoritesHome";
  const isFavoritesPage = className === "favoritesPage";
  const limit = isFavoritesPage || isXPage ? (isXPage ? 10 : 0) : 5;
  const videosToDisplay = !limit ? videosFiltered : videosFiltered.slice(0, limit);

  return (
    <VideoListOuterContainer $loading={loading} className={className}>
      <SectionTitle text={header} className={className} />
      <VideoListContainer className={className}>
        {videosToDisplay.map(video => (
          <VideoItem
            key={video.id.videoId}
            title={video.snippet.title}
            snippet={video.snippet.thumbnails.medium.url}
            onSelect={handleSelect(video.id.videoId)}
            onFavToggle={handleFavToggle(video)}
            isFavorite={video.isFavorite}
            className={className}
          />
        ))}
      </VideoListContainer>
    </VideoListOuterContainer>
  );
}

export default VideoList;
