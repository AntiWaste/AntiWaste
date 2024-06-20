
// axios.js
import axios from 'axios';

// Set base URL for API requests
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/auth/';

// Add a request interceptor to include Authorization header with JWT token from localStorage
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;

// import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://backend.antiwaste.shop:8000',
//     withCredentials: true,
// });

// export default instance;
