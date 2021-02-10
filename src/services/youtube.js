import axios from 'axios';
import { youtubeKey } from './privateKeys';

export const getYoutubeResult = (searchText, mainVideoId) => {
    if (!searchText) {
        if (!mainVideoId) {
            return apicall("recommended");
        } else {
            return apicall("search", mainVideoId);
        }        
    } else {
        return apicall("search", null, searchText);
    }
}

const apicall = (callType, videoId, text) => {
    if (callType === "search") {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: "snippet",
                    maxResults: 5,
                    type: "video",
                    relatedToVideoId: videoId,
                    q: text,
                    key: youtubeKey,
                    videoEmbeddable: true,
                    relevanceLanguage: "en",
                },
                headers: {
                    "Accept": "application/json"
                }
            });
    } else if (callType === "recommended") {
        return axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: "snippet",
                chart: "mostPopular",
                regionCode: "ES",
                key: youtubeKey,
                videoEmbeddable: true
            },
            headers: {
                "Accept": "application/json" 
            }
        });
    }
};