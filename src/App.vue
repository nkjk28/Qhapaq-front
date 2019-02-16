<template>
  <div id="app">
    <border class="triangle1"></border>
    <border class="triangle2"></border>
    <header class="name"><font size="9">Qhapaq</font></header>
    <router-view/>
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
