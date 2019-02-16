<template>
  <div>
    <h1>エラー</h1>
    <b-alert variant="danger" show>{{ msg }}</b-alert>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapActions('account', ['logout'])
  },
  mounted: function () {
    switch (this.$route.params.code) {
      case 403:
        this.msg = 'セッション切れです再度ログインして下さい。３秒後に自動的にログインへ移行します'
        setTimeout(() => { this.logout() }, 3000)
        break
      default:
        this.msg = 'ページが存在しません'
        break
    }
  }
}
</script>
