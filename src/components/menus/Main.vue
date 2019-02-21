<template>
  <div>
    <h1>メニュー</h1>
    <router-view></router-view>
  </div>
</template>

<script>
// export default {
//   name: 'Genres',
//   data () {
//     return {
//       genres: []
//     }
//   },
//   methods: {
//   },
//   mounted: function () {
//     this.axios.get(process.env.API_ENDPOINT + 'genres').then(response => {
//       this.genres = response.data
//     }).catch(error => {
//       console.log(error.response)
//     })
//   }
// }
</script>
