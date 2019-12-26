import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// @ts-ignore
let _api = axios.create({
  baseURL: 'https://localhost:3000/api',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: [],
    comments: []
  },
  mutations: {
    addBug(state, bug) {
      state.bugs.push(bug)
    }
  },
  actions: {
    async createBug({ commit, dispatch }, bug) {
      let res = await _api.post('bugs', bug)
      commit('addBug', res.data)
    }
  },
  modules: {
  }
})
