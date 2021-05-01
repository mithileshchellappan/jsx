import axios from 'axios';

const KEY = 'AIzaSyBf0XKizCs4imD2XDVazc_LliEaVAX0y78'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        type:'video',
        part:'snippet',
        maxResults:10,
        key:KEY
    }
});