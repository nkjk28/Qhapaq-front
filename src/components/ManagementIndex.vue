<template>
  <div>
    <router-link :to="{name: 'MenusIndex'}" tag="button" class="menu">メニュー<br>一覧 <font-awesome-icon icon="book-open" /></router-link>
    <router-link :to="{name: 'Genres'}" tag="button" class="genre_menu">ジャンル別<br>メニュー <font-awesome-icon icon="book-open" /></router-link>
    <router-link :to="{name: 'Users'}" tag="button" class="user_management">ユーザー<br>管理 <font-awesome-icon icon="user" /></router-link>
    <router-link :to="{name: 'MenuNew'}" tag="button" class="add_menu">メニュー<br>追加 <font-awesome-icon icon="plus" /></router-link>
    <router-link :to="{name: 'GenreNew'}" tag="button" class="add_genre">ジャンル<br>追加 <font-awesome-icon icon="plus" /></router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('account', ['status', 'user'])
  }
}
</script>

<style>
.menu, .genre_menu, .user_management, .add_menu, .add_genre{
  position: absolute;
  width: 35vw;
  height: 35vh;
  font-size:5vh;
  border-radius: 5vh;
  box-shadow:1vh 1vw #555555;
  -webkit-text-stroke: 1px #cccccc;
  font-weight: bold;
  font-size: 7vh;
}
.menu{
  top: 10vh;
  left: 10vw;
  background-color: #38d140;
}

.menu:hover{
  background-color: #38a140;
}

.genre_menu{
  top: 100vh;
  left: 10vw;
  top: 10vh;
  left: 55vw;
  background-color: #38d140;
}

.genre_menu:hover{
  background-color: #38a140;
}

.user_management{
  top: 100vh;
  left: 10vw;
  background-color: #ca4667;
}

.user_management:hover{
  background-color: #ca2667;
}

.add_menu{
  top: 55vh;
  left: 10vw;
  background-color: #d1ad38;
}

.add_menu:hover{
  background-color: #d18d38;
}

.add_genre{
  top: 55vh;
  left: 55vw;
  background-color: #4238d1;
}

.add_genre:hover{
  background-color: #4218d1;
}
</style>
>>>>>>> develop
