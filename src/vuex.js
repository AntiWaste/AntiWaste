

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router/index'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user:null,
        error: null
    },
    mutations:{
        setUser(state, user){
            state.user = user
        },
        setError(state, error){
            state.error = error
        }
    },
    getters:{
        user(state){
            return state.user
        },
        error(state){
            return state.error
        }
    },
    actions:{
        async register({commit}, user){
            try{
                const res = await axios.post('http://localhost:5000/api/auth/register', user)
                commit('setUser', res.data.user)
                localStorage.setItem('token', res.data.token)
                router.push('/')
            }catch(e){
                commit('setError', e.response.data.message)
            }
        },
        async login({commit}, user){
            try{
                const res = await axios.post('http://localhost:5000/api/auth/login', user)
                commit('setUser', res.data.user)
                localStorage.setItem('token', res.data.token)
                router.push('/')
            }catch(e){
                commit('setError', e.response.data.message)
            }
        },
        async getUser({commit}){
            try{
                const res = await axios.get('http://localhost:5000/api/auth/user', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                commit('setUser', res.data.user)
            }catch(e){
                commit('setError', e.response.data.message)
            }
        }
    },

})