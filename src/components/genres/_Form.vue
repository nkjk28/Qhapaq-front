<template>
  <div id="genre">
    <label>ジャンル名:
      <b-form-input type="text" v-model="genre.name"/>
    </label><br>
    <br>
    <label>ジャンルの説明:
      <b-form-input type="text" v-model="genre.description"/>
    </label><br>
    <br>
    <b-button variant="success" @click="clickCreateButton" v-if="method == 'post'">追加</b-button>
    <b-button variant="success" @click="clickUpdateButton" v-else>更新</b-button>
  </div>
</template>

<style>
div #genre {
  padding: 1em;
  border: 1px solid #ccc;
}
label {
  width: 100%;
}
</style>

<script>
export default {
  props: ['method', 'genre'],
  methods: {
    clickCreateButton: function () {
      this.axios.post(process.env.API_ENDPOINT + 'genre', JSON.stringify(this.genre)).then(response => {
        this.$router.push({name: 'Genres'})
      }).catch(err => {
        console.log(err.response)
      })
    },
    clickUpdateButton: function () {
      let data = JSON.stringify(
        Object.assign(this.genre, {userToken: ''})
      )
      this.axios.post(process.env.API_ENDPOINT + 'genre/' + this.genre.id, data).then(response => {
        this.$router.push({name: 'Genres'})
      }).catch(err => {
        console.log(err.response)
      })
    }
  }
}
</script>
