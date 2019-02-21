<template>
  <div>
    <h2>メニューの編集(更新)</h2>
    <menu-form :menu='menu' method="put" ></menu-form>
  </div>
</template>

<script>
import MenuForm from '@/components/menus/_form'

export default {
  name: 'MenuEdit',
  components: { MenuForm },
  data () {
    return {
      menu: {}
    }
  },
  mounted: function () {
    this.axios.get(process.env.API_ENDPOINT + 'menu/' + this.$route.params.id).then(response => {
      this.menu = response.data
      // this.ingredientForm = response.data.ingredientForm
    }).catch(error => {
      console.log(error.response)
    })
  }
}
</script>
