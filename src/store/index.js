import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './types'

Vue.use(Vuex)

const state = {
  activeNote: {
    title: 'A big red horse turne around'
  }
}

const mutations = {
  [types.EDITOR_SAVE_TITLE] (state, title) {
    state.activeNote.title = title
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
