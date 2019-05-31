import Vue from 'vue'
import Router from 'vue-router'
import RateUs from '@/components/RateUs'
import Statistics from './../components/Statistics'
import Settings from './../components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rate Us',
      component: RateUs
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
