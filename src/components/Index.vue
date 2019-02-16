<template>
  <div class="index">
    <h1>学食メニューサポートシステム<br>「Qhapaq」へようこそ</h1>
    <form v-on:submit.prevent="clickLoginButton">
      <label>ユーザー名:
        <b-form-input v-model="user.name" type="text" placeholder="Enter your name" />
      </label><br>
      <label>パスワード:
        <b-form-input v-model="user.password" type="password" placeholder="Enter your password" />
      </label><br>
      <button class="login_button">ログイン</button>
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
  border: 15px solid #bebebe;
  padding: 50px;
  margin: 50px;
   background: #87bbc2;
}

.login_button{
  width: 15vw;
  height: 5vh;
  border-radius: 20px;
}
label {
  width: 100%;
}
input {
  margin: 1em;
}
</style>
