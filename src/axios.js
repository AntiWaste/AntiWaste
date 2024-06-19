import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://your-laravel-app-url/api',
    withCredentials: true,
});

export default instance;