import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

const user = JSON.parse(localStorage.getItem('user'))
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null }

const actions = {
  login ({ dispatch, commit }, {username, password}) {
    axios.post(process.env.API_ENDPOINT + 'sign_in',
      JSON.stringify({
        name: username,
        password: password
      })
    ).then(response => {
      commit('login', response.data.user)
      router.push({name: 'ManagementIndex'})
    }).catch(error => {
      console.log('error')
      console.log(error)
      // dispatch('alert/error', error, { root: true })
    })
  },
  logout ({ commit }) {
    commit('logout')
  }
}

const mutations = {
  login (state, user) {
    state.status = {loggedIn: true}
    state.user = user
  },
  logout (state) {
    state.status = {}
    state.user = null
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
