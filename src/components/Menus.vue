<template>
  <div>
    <h2>メニュー一覧</h2>
    <div v-for="menu in menus" v-bind:key="menu.name">
      <router-link :to="{name: 'Ingredients', params: {id: menu.id}}">{{ menu.name }}</router-link>
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
    this.axios.get('http://localhost:4567/genre/' + this.$route.params.id).then(response => {
      this.menus = response.data
    }).catch(error => {
      console.log(error.response)
    })
  }
}
</script>
