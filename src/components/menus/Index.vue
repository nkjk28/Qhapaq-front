<template>
  <div>
    <h2>メニュー一覧</h2>
    <menu-index :menus="menus"></menu-index>
  </div>
</template>

<script>
import MenuIndex from '@/components/menus/_Index'

export default {
  name: 'Menus',
  components: { MenuIndex },
  data () {
    return {
      menus: []
    }
  },
  methods: {},
  mounted: function () {
    this.axios.get('http://localhost:4567/menus').then(response => {
      this.menus = response.data
    }).catch(error => {
      console.log(error.response)
    })
  }
}
</script>
