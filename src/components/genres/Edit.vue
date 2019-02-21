<template>
  <div>
    <h2>ジャンル編集</h2>
    <genre-form method="put" :genre="genre"></genre-form>
  </div>
</template>

<script>
import GenreForm from '@/components/genres/_Form'
export default {
  name: 'GenreEdit',
  components: { GenreForm },
  data () {
    return {
      genre: {}
    }
  },
  mounted: function () {
    this.axios.get(process.env.API_ENDPOINT + 'genre/' + this.$route.params.id).then(response => {
      this.genre = response.data
    }).catch(error => {
      console.log(error.response)
    })
  }
}
</script>
