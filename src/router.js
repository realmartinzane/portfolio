import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: 
  [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "portfolio" */ './views/About.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio.vue')
    }
  ]
})
