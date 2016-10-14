import Vue from 'vue'
import Router from 'vue-router'

import Hello from '../components/Hello'
import EditorView from '../views/EditorView'
import Impress from '../components/Impress'
import NotFound from '../components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello
    },
    {
      path: '/editor',
      name: 'editor',
      component: EditorView
    },
    {
      path: '/impress',
      name: 'impress',
      component: Impress
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
