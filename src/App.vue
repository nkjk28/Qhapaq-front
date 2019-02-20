<template>
  <div id="app">
    <header>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand ><router-link :to="{name: 'Index'}" class="header-icon">Qhapaq</router-link></b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

          <b-collapse is-nav id="nav_collapse" v-if="status.loggedIn">
            <b-navbar-nav>
              <b-nav-item :to="{name: 'ManagementIndex'}">管理</b-nav-item>
              <b-nav-item :to="{name: 'MenusIndex'}">メニューを探す</b-nav-item>
              <b-nav-item :to="{name: 'Genres'}">ジャンルから探す</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <!-- Using button-content slot -->
                <template slot="button-content"><em>{{ user.user.name }}</em></template>
                <b-dropdown-item>Profile</b-dropdown-item>
                <b-dropdown-item>{{ user.expiration_time }}</b-dropdown-item>
                <b-dropdown-item @click="logout()">ログアウト</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
    </header>
    <router-view class="main"/>
    <footer>footer</footer>
    <!-- <border class="triangle1"></border> -->
    <!-- <border class="triangle2"></border> -->
    <!-- <header class="name"><font size="9">Qhapaq</font></header> -->
    <!-- <router&#45;view/> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState('account', ['status', 'user']),
    ...mapActions('account', ['logout'])
  }
}
</script>

<style>
html, body {
  margin: 0;
  background-color: #ececec;
}
h1 {
  text-align: center;
}
.main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
  margin: 50px 10% 50px 10%;
}
header{
  background-color: #bdbcff;
}
.name{
  color:#ececec;
}

.triangle1{
  position: absolute;
  margin-top: 0.8vh;
  margin-left: -12vh;
   border-top: 3.5vh solid transparent;
  border-right: 3.5vh solid transparent;
  border-bottom: 1.5vh solid #ececec;
  border-left: 1.5vh solid  #ececec;
}
.triangle2{
  position: absolute;
  margin-top: 0;
  margin-left: 7vh;
  border-top: 1.5vh solid #ececec;
  border-right: 1.5vh solid #ececec;
  border-bottom: 3.5vh solid transparent;
  border-left: 3.5vh solid transparent;
}

.header-icon {
  color: #fff;
}
.header-icon:hover {
  color: #ccc;
  text-decoration: none;
}
</style>
