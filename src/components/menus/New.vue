<template>
  <div>
    <h2>メニューの作成(追加)</h2>
    <menu-form :menu='newMenu' method="post"></menu-form>
  </div>
</template>

<script>
import MenuForm from '@/components/menus/_form'

export default {
  name: 'MenuNew',
  components: { MenuForm },
  data () {
    return {
      newMenu: {
        name: '',
        genre_id: 0,
        ingredients: [],
        steps: []
      }
    }
  }
}
</script>
