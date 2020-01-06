import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

// @ts-ignore
let _api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 7000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: [],
    notes: []
  },
  mutations: {
    addBug(state, bug) {
      state.bugs.push(bug)
      router.push({ name: "bugDetails", params: { id: bug.id } })
    },
    setAllBugs(state, data) {
      state.bugs = data
    },
    setActiveBug(state, bug) {
      state.activeBug = bug
    },
    addNote(state, note) {
      state.notes.push(note)
    },
    setNotesOfBug(state, data) {
      state.notes = data
    },
    setNotes(state, data) {
      state.notes = data
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
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get('bugs/' + id)
      commit('setActiveBug', res.data)
    },
    async editBug({ commit, dispatch }, bugEdit) {
      await _api.put('bugs/' + bugEdit.id, bugEdit.description)
      dispatch('getBugs')
    },
    async closeBug({ commit, dispatch }, id) {
      await _api.delete("bugs/" + id)
      dispatch('getBugs')
    },
    async createNote({ commit, dispatch }, note) {
      let res = await _api.post('notes', note)
      commit('addNote', res.data)
    },
    async getNotesByBug({ commit, dispatch }, id) {
      let res = await _api.get('notes')
      commit('setNotesOfBug', res.data)
    },
    async getNotes({ commit, dispatch }) {
      let res = await _api.get('notes')
      commit('setNotes', res.data)
    },
    async deleteNote({ commit, dispatch }, id) {
      await _api.delete('notes/' + id)
      dispatch('getNotes')
    }
  },
  modules: {
  }
})
