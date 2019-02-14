<template>
  <div id="app">
    <header><font size=9>Qhapaq</font></header>
    <router-view/>
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
header{
  background-color: #bdbcff;
}
body{
  margin-left: 0;
  margin-right: 0;
  background-color: #ececec;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

</style>
