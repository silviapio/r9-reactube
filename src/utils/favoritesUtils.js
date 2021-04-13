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