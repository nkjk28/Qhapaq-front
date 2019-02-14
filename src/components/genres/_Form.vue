<template>
  <div>
    <label>ジャンル名:
      <input type="text" v-model="genre.name"/>
    </label><br>
    <br>
    <label>ジャンルの説明:
      <input type="text" v-model="genre.description"/>
    </label><br>
    <br>
    <button v-on:click="clickCreateButton" v-if="method == 'post'">追加</button>
    <button v-on:click="clickUpdateButton" v-else>更新</button>
  </div>
</template>

<script>
export default {
  props: ['method', 'genre'],
  methods: {
    clickCreateButton: function () {
      this.axios.post('http://localhost:4567/genre', JSON.stringify(this.genre)).then(response => {
        this.$router.push({name: 'Genres'})
      }).catch(err => {
        console.log(err.response)
      })
    },
    clickUpdateButton: function () {
      this.axios.post('http://localhost:4567/genre/' + this.genre.id, JSON.stringify(this.genre)).then(response => {
        this.$router.push({name: 'Genres'})
      }).catch(err => {
        console.log(err.response)
      })
    }
  }
}
</script>
