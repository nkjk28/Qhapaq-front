<template>
  <div>
    <h2>メニュー一覧</h2>
    <router-link :to="{name: 'GenreEdit', params: {id: $route.params.id}}" tag="button">ジャンル名の編集</router-link><br>
    <div v-for="menu in menus" v-bind:key="menu.name">
      <router-link :to="{name: 'MenuShow', params: {id: menu.id}}">{{ menu.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menus',
  data () {
    return {
      menus: []
    }
  },
  methods: {},
  mounted: function () {
    this.axios.get('http://localhost:4567/menus/' + this.$route.params.id).then(response => {
      this.menus = response.data
    }).catch(error => {
      console.log(error.response)
    })
  }
}
</script>
