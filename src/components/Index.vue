<template>
  <div class="index">
    <h1>Welcome to Qhapaq system</h1>
    <form v-on:submit.prevent="clickLoginButton">
      <label>Username: <input type="text" v-model="user.name" placeholder="hoge"> </label>
      <br> <br>
      <label>Password: <input type="password" v-model="user.password" placeholder="fuga"> </label>
      <br><br>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      user: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    clickLoginButton: function () {
      this.axios.post('http://localhost:4567/user/sign_in',
        JSON.stringify({
          name: this.user.name,
          password: this.user.password
        })
      ).then(response => {
        this.$router.push('/management-index')
      }).catch(error => {
        alert(error.response.statusText)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  border: 1px solid #ccc;
  padding: 50px;
  margin: 50px;
}
</style>
