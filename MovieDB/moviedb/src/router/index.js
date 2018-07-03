import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Films from '@/components/Films'
import Serials from '@/components/Serials'
import Actors from '@/components/Actors'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/films',
      name: 'Films',
      component: Films
    },
    {
      path: '/serials',
      name: 'Serials',
      component: Serials
    },
    {
      path: '/actors',
      name: 'Actors',
      component: Actors
    }
  ]
})
