import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/StartPage'
import Statistics from './../components/Statistics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start page',
      component: StartPage
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics,
      props: true
    }
  ]
})
