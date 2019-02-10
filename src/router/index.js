import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ManagementIndex from '@/components/ManagementIndex'
import UserManagement from '@/components/UserManagement'
import Genres from '@/components/Genres'
import Menus from '@/components/Menus'
import Ingredients from '@/components/Ingredients'

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
    },
    {
      path: '/user-management',
      name: 'UserManagement',
      component: UserManagement
    },
    {
      path: '/genres',
      name: 'Genres',
      component: Genres
    },
    {
      path: '/menus/:id',
      name: 'Menus',
      component: Menus
    },
    {
      path: '/ingredients/:id',
      name: 'Ingredients',
      component: Ingredients
    }
  ]
})
