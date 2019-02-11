import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ManagementIndex from '@/components/ManagementIndex'

import Genres from '@/components/Genres'

import Menus from '@/components/menus/index'
import MenuNew from '@/components/menus/new'
import MenuEdit from '@/components/menus/edit'
import MenuShow from '@/components/menus/show'
// import MenuForm from '@/components/menus/_form'

import Users from '@/components/users/index.vue'
import UserNew from '@/components/users/new.vue'

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
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/user/new',
      name: 'UserNew',
      component: UserNew
    },
    {
      path: '/genres',
      name: 'Genres',
      component: Genres
    },
    {
      // ジャンル指定用のID
      path: '/menus/:id',
      name: 'Menus',
      component: Menus
    },
    {
      path: '/menu/new',
      name: 'MenuNew',
      component: MenuNew
    },
    {
      path: '/menu/edit/:id',
      name: 'MenuEdit',
      component: MenuEdit
    },
    {
      path: '/menu/:id',
      name: 'MenuShow',
      component: MenuShow
    }
  ]
})
