import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api/auth/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
