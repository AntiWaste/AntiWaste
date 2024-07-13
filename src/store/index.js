// store/index.js
import axios from '@/axios';
import { createStore } from 'vuex';
import router from '../router';

export default createStore({
  state: {
     user: JSON.parse(localStorage.getItem("user"))||null,
    token: localStorage.getItem("token")||''
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('login', credentials);
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem('token', token);
        localStorage.setItem("user", JSON.stringify(user));
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        commit('setUser', user);
        router.push('/home');
      } catch (error) {
        console.error("Error logging in:", error);
        throw error; // Handle the error appropriately in your application
      }
    },
    async logout({ commit }) {
      await axios.post('logout');
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
      commit('setUser', null);
      router.push('/home');
    },
    async fetchUser({ commit }) {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const { data } = await axios.get('users', {
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