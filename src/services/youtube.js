import axios from 'axios';
import { youtubeKey } from './privateKeys';

export const getSearchResult = (searchText) => {
    return axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: 'snippet',
            maxResults: 5,
            type: 'video',
            q: searchText,
            key: youtubeKey
        },
        headers: {
            "Accept": "application/json"
        }
    });
}