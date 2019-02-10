import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ManagementIndex from '@/components/ManagementIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/management-index',
      name: 'ManagementIndex',
      component: ManagementIndex
    }
  ]
})
