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
        <li v-for="(n,i) in news" v-bind:key="i" v-if=" !(n.commit.message === 'update for heroku') ">{{n.commit.committer.date}}: {{n.commit.message}}</li>
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
      password: '',
      news: []
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  mounted: function () {
    this.axios.get('https://api.github.com/repos/nkjk28/Qhapaq-front/commits').then(response => {
      this.news = response.data
    }).catch(error => {
      console.log(error.response)
    })
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
