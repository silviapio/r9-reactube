export const updateFavorites = (video, favorites) => {
    let otherVideos = favorites.filter(favoritesItem => favoritesItem.id.videoId !== video.id.videoId);
    if (otherVideos.length === favorites.length) {
        video.isFavorite = true;
        otherVideos.push(video)
    } else { video.isFavorite = false }
    localStorage.setItem("favorites", JSON.stringify(otherVideos));
    return(otherVideos);
};

export const isVideoFavorite = (myVideo, favorites) => {
    let videoFound = favorites.filter(favoritesItem => favoritesItem.id.videoId === myVideo.id.videoId);
    return videoFound.length === 1;
}
/*
//videoDetailPage
const isVideoFavorite = myVideoId => {
    let videoFound = favorites.filter(favoritesItem => favoritesItem.id.videoId === myVideoId);
    return videoFound.length === 1;
}

//searchHistory
recentlyViewed.forEach(video => {
            //import check
          const filtered = favorites.filter(favoritesItem => favoritesItem.id.videoId === video.id.videoId);
          video.isFavorite = isVideoFavorite(video, favorites);
        });
        lastSearchedVideos.forEach(video => {
            const filtered = favorites.filter(favoritesItem => favoritesItem.id.videoId === video.id.videoId);
            video.isFavorite = filtered.length === 1;
        });
*/