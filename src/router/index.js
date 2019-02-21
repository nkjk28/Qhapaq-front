import Vue from 'vue'
import Router from 'vue-router'
import Vuex from '@/store/index'
import axios from 'axios'

import Index from '@/components/Index'
import ManagementIndex from '@/components/ManagementIndex'
import _Error from '@/components/Error'

import GenreMain from '@/components/genres/Main'
import Genres from '@/components/genres/Index'
import GenreNew from '@/components/genres/New'
import GenreEdit from '@/components/genres/Edit'

import MenuMain from '@/components/menus/Main'
import Menus from '@/components/menus/Index'
import Menu from '@/components/menus/GenreFilterIndex'
import MenuNew from '@/components/menus/New'
import MenuEdit from '@/components/menus/Edit'
import MenuShow from '@/components/menus/Show'
// import MenuForm from '@/components/menus/_form'

import Users from '@/components/users/index.vue'
import UserNew from '@/components/users/new.vue'

Vue.use(Router, Vuex)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/error/:code',
      name: 'Error',
      component: _Error
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
      path: '/genre',
      component: GenreMain,
      children: [
        {
          path: '',
          name: 'Genres',
          component: Genres
        },
        {
          path: 'new',
          name: 'GenreNew',
          component: GenreNew
        },
        {
          path: 'edit/:id',
          name: 'GenreEdit',
          component: GenreEdit
        }
      ]
    },
    {
      path: '/menus',
      component: MenuMain,
      children: [
        // ジャンル関係無しのメニュー一覧
        {
          path: '',
          name: 'MenusIndex',
          component: Menus
        },
        {
          // ジャンル指定用のID
          path: ':id',
          name: 'Menus',
          component: Menu
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
        // メニューの詳細(材料含む)
        {
          path: '/menu/:id',
          name: 'MenuShow',
          component: MenuShow
        }
      ]
    },
    { path: '*', component: _Error }
  ]
})
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/', '/error']
  const authRequired = !publicPages.includes(to.path)
  const account = Vuex.state.account

  if (authRequired && !account.user) {
    return next('/')
  }

  if (account.user) {
    axios.get(process.env.API_ENDPOINT + 'authentication/' + account.user.token).catch(function () {
      next({ path: '/error/403' })
    })
  }

  next()
})

export default router
