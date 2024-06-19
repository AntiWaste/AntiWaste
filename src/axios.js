import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://backend.antiwaste.shop:8000',
    withCredentials: true,
});

export default instance;