import axios from 'axios';

const KEY = 'AIzaSyDYhiCeAa8QTiuFRdfSlcgOFKiGQHXM4cU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});
