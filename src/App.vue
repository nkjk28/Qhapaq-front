<template>
  <div id="app">
    <header>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand ><router-link :to="{name: 'Index'}">Qhapaq</router-link></b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
              <b-nav-item :to="{name: 'ManagementIndex'}">管理</b-nav-item>
              <b-nav-item :to="{name: 'MenusIndex'}">メニューを探す</b-nav-item>
              <b-nav-item :to="{name: 'Genres'}">ジャンルから探す</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <!-- Using button-content slot -->
                <template slot="button-content"><em>User</em></template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
    </header>
    <router-view class="main"/>
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  margin: 0;
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
</style>
