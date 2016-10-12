import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  activeNote: {
    title: 'A big red horse turne around'
  }
}

const mutations = {
  saveNote (state, note) {
    state.activeNote = note
  }
}

const actions = {
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})

export default store
