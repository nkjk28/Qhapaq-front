<template>
  <div class="index">
    <h1>Welcome to Qhapaq system</h1>
    <form v-on:submit.prevent="clickLoginButton">
      <label>アカウント:
        <b-form-input v-model="user.name" type="text" placeholder="Enter your name" />
      </label><br>
      <label>パスワード:
        <b-form-input v-model="user.password" type="password" placeholder="Enter your password" />
      </label><br>
      <b-button variant="primary">ログイン</b-button>
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
        this.$router.push({name: 'ManagementIndex'})
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
label {
  width: 100%;
}
input {
  margin: 1em;
}
</style>
