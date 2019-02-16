<template>
  <div>
    <div v-for="genre in genres" v-bind:key="genre.id">
      <router-link :to="{name: 'Menus', params: {id: genre.id}}">{{ genre.name }}</router-link>
    </div>
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

<style>
  #Menus
  {
    background-color: brown;
  }
</style>
