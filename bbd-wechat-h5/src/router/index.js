import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home/Index'

Vue.use(Router)

export default new Router({
  model: 'hash',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
