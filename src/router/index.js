import Vue from 'vue'
import Router from 'vue-router'

import Users from '@/views/users/index'
import UserDetails from '@/views/users/details'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'users',
      component: Users
    },
    {
      path:'/user/:slug',
      component: UserDetails
    }
  ]
})
