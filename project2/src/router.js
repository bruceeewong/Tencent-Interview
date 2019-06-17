import Vue from 'vue'
import Router from 'vue-router'
import WeekMaxFlowTrend from './views/WeekMaxFlowTrend.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'week-max-flow-trend',
      component: WeekMaxFlowTrend
    },
    {
      path: '/day_flow',
      name: 'day-flow-trend',
      component: () => import('./views/DayFlowTrend.vue')
    },
    {
      path: '/day_flow_dist',
      name: 'day-max-flow-dist',
      component: () => import('./views/DayMaxFlowDist.vue')
    }
  ]
})
