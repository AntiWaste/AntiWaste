// store/index.js
import { createStore } from 'vuex';
import axios from '@/axios';
import router from '../router';

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || '',

  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
      const response = await axios.post('/login', credentials);
      const token = response.data.token;
      console.log(response.data);
      axios.defaults.headers.common['Authorization'] = token;
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem('token', token);
      commit('setUser', response.data.user);
      router.push('/home');
    } catch (error) {
      localStorage.removeItem('token');
      throw error;
    }
    },

// Parse the JSON string into an object
    async logout({ commit }) {
      await axios.post('/logout');
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
      commit('setUser', null);
      router.push('/home');
    },
    // Uncomment and use fetchUser if you need to fetch user details after page reload
    async fetchUser({ commit }) {
      const token = localStorage.getItem('token');
      if (token) {
        const { data } = await axios.get('/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(data);
        commit('setUser', data);
      }
    },
  },
  getters: {
    isAuthenticated: state => !!state.token,
    user: (state) => state.user,
    isAdmin: (state) => state.user && state.user.role === 'admin',
  },
});
