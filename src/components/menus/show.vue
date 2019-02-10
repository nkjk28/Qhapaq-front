<template>
  <div>
    <table border="1" width="80%" aligen="center">
      <caption>{{ menu.name }}の材料</caption>
      <tr>
        <th>材料名</th>
        <th>量</th>
        <th>金額</th>
        <th>説明</th>
      </tr>
      <tr  v-for="ingredient in ingredients" v-bind:key="ingredient.name">
        <td>{{ ingredient.name }}</td>
        <td>{{ ingredient.amount }}{{ ingredient.unit }}/人</td>
        <td>{{ ingredient.cost }}円/人</td>
        <td>{{ ingredient.description }}</td>
      </tr>
    </table>
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
