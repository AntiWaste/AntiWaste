// store/index.js
import axios from '@/axios';
import { createStore } from 'vuex';
import router from '../router';

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      const response = await axios.post('/login', credentials);
      const token = response.data.token;
      localStorage.setItem('token', token);
      if (token) {
        const { data } = await axios.get('/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit('setUser', data);
        if (data) {
          router.push('/home');
        }
      }
    },
    async logout({ commit }) {
      await axios.post('/logout');
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
      commit('setUser', null);
      router.push('/home');
    },
    async fetchUser({ commit }) {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const { data } = await axios.get('/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          commit('setUser', data);
        } catch (error) {
          localStorage.removeItem('token');
          commit('setUser', null);
          console.error('Failed to fetch user:', error);
        }
      }
    },
    // Uncomment and use fetchUser if you need to fetch user details after page reload
    // async fetchUser({ commit }) {
    //   const token = localStorage.getItem('token');
    //   if (token) {
    //     const { data } = await axios.get('/user', {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     commit('setUser', data);
    //   }
    // },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    user: (state) => state.user,
    isAdmin: (state) => state.user && state.user.role === 'admin',
  },
});