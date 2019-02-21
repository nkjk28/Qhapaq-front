<template>
  <div>
    <div v-for="genre in genres" v-bind:key="genre.id">
      <router-link :to="{name: 'Menus', params: {id: genre.id}}" tag= "button" class="genres">{{ genre.name }}</router-link>
      <p></p>
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
    this.axios.get(process.env.API_ENDPOINT + 'genres').then(response => {
      this.genres = response.data
    }).catch(error => {
      console.log(error.response)
    })
  }
}
</script>

<style>
  .genres{
    position: relative;
    width: 80vw;
    height: 15vh;
    color: #e0e0e0;
    font-size: 5vw;
    font-weight: bold;
    background: #71c1c7;
    border-radius: 2vw;
    box-shadow:0.5vh 0.5vw #a1a1a1;
    -webkit-text-stroke: 2px #4d4d4d;
  }

  .genres:hover{
    background-color: #73a9bd;
  }
</style>
