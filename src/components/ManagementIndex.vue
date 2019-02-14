<template>
  <div>
    <h1>Management Page</h1>
    {{ user }}
    <ul>
      <li><router-link :to="{name: 'Genres'}">メニュー一覧</router-link></li>
      <li><router-link :to="{name: 'MenuNew'}">メニュー追加</router-link></li>
      <li><router-link :to="{name: 'Users'}">ユーザー管理</router-link></li>
      <li><router-link :to="{name: 'GenreNew'}">ジャンル追加</router-link></li>
    </ul>
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
