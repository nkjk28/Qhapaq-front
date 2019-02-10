<template>
  <div>
    <h2>{{ menu.name }}の材料</h2>
    <div v-for="ingredient in ingredients" v-bind:key="ingredient.name">
      <span>{{ ingredient.name }}</span><br>
      <span>{{ ingredient.amount }}{{ ingredient.unit }}/人</span><br>
      <span>{{ ingredient.cost }}円/人</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ingredients',
  data () {
    return {
      menu: {},
      ingredients: []
    }
  },
  methods: {
  },
  mounted: function () {
    this.axios.get('http://localhost:4567/menu/' + this.$route.params.id).then(response => {
      this.menu = response.data.menu
      this.ingredients = response.data.ingredients
    }).catch(error => {
      console.log(error.response)
    })
  }
}
</script>
