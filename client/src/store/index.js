import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// @ts-ignore
let _api = axios.create({
  baseURL: 'http://localhost:3000/api',
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
    },
    setAllBugs(state, data) {
      state.bugs = data
    }
  },
  actions: {
    async createBug({ commit, dispatch }, bug) {
      let res = await _api.post('bugs', bug)
      commit('addBug', res.data)
    },
    async getBugs({ commit, dispatch }) {
      let res = await _api.get('bugs')
      commit('setAllBugs', res.data)
    }
  },
  modules: {
  }
})
