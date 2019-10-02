import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Accueil from './components/index/Accueil.vue'
import Connection from './components/index/Connection.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '',
          component: Accueil
        },
        {
          path: 'connection',
          component: Connection
        }
      ]
    }
  ]
})
