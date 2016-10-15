import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './types'
import { set } from './firebase'

Vue.use(Vuex)

const state = {
  activeNote: {
    id: 1,
    title: 'A big red horse turne around'
  }
}

const mutations = {
  [types.EDITOR_SAVE_TITLE] (state, title) {
    state.activeNote.title = title
    set(state.activeNote.id, state.activeNote)
  }
}

const actions = {
  [types.EDITOR_SAVE] () {

  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})

export default store
