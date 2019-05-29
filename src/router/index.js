import Vue from 'vue'
import Router from 'vue-router'
import RateUs from '@/components/RateUs'
import Statistics from './../components/Statistics'

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
      component: Statistics,
      props: true
    }
  ]
})
