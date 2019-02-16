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
