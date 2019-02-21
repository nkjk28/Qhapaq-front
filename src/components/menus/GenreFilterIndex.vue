<template>
  <div>
    <h2>ジャンル別メニュー一覧</h2>
    <router-link :to="{name: 'GenreEdit', params: {id: $route.params.id}}" tag="button">ジャンル名の編集</router-link><br>
    <menu-index :menus="menus"></menu-index>
  </div>
</template>

<script>
import MenuIndex from '@/components/menus/_Index'

export default {
  name: 'GenreFilterIndex',
  components: { MenuIndex },
  data () {
    return {
      menus: []
    }
  },
  methods: {},
  mounted: function () {
    this.axios.get(process.env.API_ENDPOINT + 'menus/' + this.$route.params.id).then(response => {
      this.menus = response.data
    }).catch(error => {
      console.log(error.response)
    })
  }
}
</script>
