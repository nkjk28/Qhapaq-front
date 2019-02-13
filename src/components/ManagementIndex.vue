<template>
  <div>
    <router-link to="/genres" tag="button" class="manu">メニュー<br>一覧</router-link>
    <router-link to="/users" tag="button" class="user_management">ユーザー<br>管理</router-link>
    <router-link to="/menu/new" tag="button" class="add_manu">メニュー<br>追加</router-link>
  </div>
</template>

<style scoped>
  .manu, .user_management, .add_manu{
    position : absolute;
    width: 35vw;
    height: 35vh;
    font-size:5vh;
    border-radius: 5vh;
    box-shadow:1vh 1vw #555555;
    -webkit-text-stroke: 1px #cccccc;
    font-weight: bold;
    font-size: 7vh;
  }
  .manu{
    top: 10vh;
    left: 10vw;
    background-color: #38d140;
  }

  .manu:hover{
    background-color: #38a140;
  }

  .user_management{
    top: 10vh;
    left: 55vw;
    background-color: #ca4667;
  }

  .user_management:hover{
    background-color: #ca2667;
  }

  .add_manu{
    top: 55vh;
    left: 10vw;
    background-color: #d1ad38;
  }

  .add_manu:hover{
    background-color: #d18d38;
  }
</style>

