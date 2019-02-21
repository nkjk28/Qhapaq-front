<template>
  <div class="index">
    <h1>学食メニューサポートシステム<br>「Qhapaq」へようこそ</h1>
    <form v-on:submit.prevent="clickLoginButton">
      <label>ユーザー名:
        <b-form-input v-model="username" type="text" placeholder="Enter your name" />
      </label><br>
      <label>パスワード:
        <b-form-input v-model="password" type="password" placeholder="Enter your password" />
      </label><br>
      <button class="login_button">ログイン</button>
    </form>
    <h2>更新履歴</h2>
    <div class="news">
      <ul>
        <li> 2019/02/21 デプロイ </li>
      </ul>
    </div>
    <a href="https://github.com/nkjk28/Qhapaq-front">ソースコード</a>
    <a href="https://github.com/nkjk28/Qhapaq-front/blob/master/LICENSE">ライセンス</a><br>
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
.news {
  width: 100%;
  height: 200px;
  overflow-y: scroll;
}
.news::-webkit-scrollbar {
  display: none;
}

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
