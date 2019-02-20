<template>
  <div>
    <router-link :to="{name: 'MenusIndex'}" tag="button" class="menu">メニュー<br>一覧 <font-awesome-icon icon="book-open" /></router-link>
    <router-link :to="{name: 'Genres'}" tag="button" class="genre_menu">ジャンル別<br>メニュー <font-awesome-icon icon="clipboard-list" /></router-link>
    <router-link :to="{name: 'MenuNew'}" tag="button" class="add_menu">メニュー<br>追加 <font-awesome-icon icon="plus" /></router-link>
    <router-link :to="{name: 'GenreNew'}" tag="button" class="add_genre">ジャンル<br>追加 <font-awesome-icon icon="plus-circle" /></router-link>
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
  position: relative;
  width: 35vw;
  height: 35vh;
  font-size:5vh;
  border-radius: 2vw;
  box-shadow:1vh 1vw #a1a1a1;
  -webkit-text-stroke: 1px #cccccc;
  font-weight: bold;
  font-size: 5vw;
  color: #424242;
  background-color: #a2d0d8;
}
.menu{
  top: 0vh;
  left: 0vw;
}

.menu:hover, .genre_menu:hover, .user_management:hover, .add_menu:hover, .add_genre:hover{
  background-color: #13a9bd;
}

.genre_menu{
  top: 0vh;
  left: 10vw;
}

.add_menu{
  top: 10vh;
  left: 0vw;
}

.add_genre{
  top: 10vh;
  left: 10vw;
}
</style>
>>>>>>> develop
