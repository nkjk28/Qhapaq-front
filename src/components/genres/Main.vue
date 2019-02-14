<template>
  <div>
    <h2>ジャンル</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Genres',
  data () {
    return {
      genres: []
    }
  },
  methods: {
  },
  mounted: function () {
    this.axios.get('http://localhost:4567/genres').then(response => {
      this.genres = response.data
    }).catch(error => {
      console.log(error.response)
    })
  }
}
</script>
