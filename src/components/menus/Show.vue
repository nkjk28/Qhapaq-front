<template>
  <div>
    <h2> {{ menu.name }}</h2>
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="人数計算:" class="mb-0">
          <b-input-group>
            <b-form-input type="number" v-model="person" />
              <b-input-group-append>
                <b-button :disabled="!person" @click="person = 0">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
    <b-table striped hover :items="ingredients" :fields="fields" >
      <template slot="amount" slot-scope="row">
        {{ row.item.amount }}{{ row.item.unit }}
      </template>

      <template slot="cost" slot-scope="row">
        {{ row.item.cost }}円
      </template>

      <template slot="calculateQuantity" slot-scope="row">
        {{ row.item.amount * person }}{{ row.item.unit }}
      </template>

      <template slot='calculatingAmount' slot-scope="row">
        {{ row.item.cost * person }}円
      </template>
    </b-table>
    <b-button :to="{ name: 'MenuEdit', params: { id: Number(menu.id) }}" variant="success">編集する</b-button>
  </div>
</template>

<script>
export default {
  name: 'Ingredients',
  data () {
    return {
      person: '0',
      menu: {},
      ingredients: [],
      fields: [
        { key: 'name', label: '材料名' },
        { key: 'amount', label: '量' },
        { key: 'cost', label: '金額' },
        { key: 'description', label: '説明' },
        { key: 'calculateQuantity', label: '量計算' },
        { key: 'calculatingAmount', label: '金額計算' }
      ]
    }
  },
  mounted: function () {
    this.axios.get('http://localhost:4567/menu/' + this.$route.params.id).then(response => {
      this.menu = response.data
      this.ingredients = response.data.ingredients
    }).catch(error => {
      console.log(error.response)
    })
  }
}
</script>

<style>
h2{
  text-align: center;
}
/* input { */
/*   float: right; */
/* } */
</style>
