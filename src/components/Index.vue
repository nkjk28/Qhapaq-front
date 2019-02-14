<template>
  <div class="index">
    <h1>Welcome to Qhapaq system</h1>
    <form v-on:submit.prevent="clickLoginButton">
      <label>Username: <input type="text" v-model="username" placeholder="hoge"> </label>
      <br> <br>
      <label>Password: <input type="password" v-model="password" placeholder="fuga"> </label>
      <br><br>
      <button>Login</button>
    </form>
    <font-awesome-icon icon="coffee" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Index',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['login']),
    clickLoginButton: function () {
      const { username, password } = this
      this.login({username, password})
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
