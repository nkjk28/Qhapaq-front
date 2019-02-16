<template>
  <div id="menu">
    <!-- {{ hogeData }} -->
    <label for="genre">ジャンル:
      <b-select name="genre" v-model="menu.genre_id">
        <option v-for="genre in genres" :value="genre.id" v-bind:key="genre.id">
        {{ genre.name}}
        </option>
      </b-select>
    </label><br><br>
    <label>メニュー名:
      <b-form-input type="text" v-model="menu.name" />
    </label>

    <b-table :items="menu.ingredients" :fields="fields">
      <template slot="amount" slot-scope="row">
        {{ row.item.amount }}{{ row.item.unit }}
      </template>

      <template slot="cost" slot-scope="row">
        {{ row.item.cost }}円
      </template>

      <template slot="edit" slot-scope="row">
        <b-button variant="success" v-on:click="EditIngredientItem(row.index)">✑</b-button>
      </template>

      <template slot="delete" slot-scope="row">
        <b-button variant="danger" v-on:click="RemoveIngredientItem(row.index)">✗</b-button>
      </template>
    </b-table>

    <label>材料: <br>
      <b-row>
        <b-col sm="2">
          <b-form-input type="text" size="sm" v-model="ingredientForm.name" placeholder="材料名"/>
        </b-col>
        <b-col sm="2">
          は一人あたり
        </b-col>
        <b-col sm="2">
          <b-form-input type="number" size="sm" v-model.number="ingredientForm.amount" placeholder="量" />
        </b-col>
        <b-col sm="1">
          <b-select v-model="ingredientForm.unit">
            <option value="g">g</option>
            <option value="ml">ml</option>
            <option value="枚">枚</option>
            <option value="匹">匹</option>
            <option value="個">個</option>
            <option value="羽">羽</option>
          </b-select>
        </b-col>
        <b-col sm="1">
        で
        </b-col>
        <b-col sm="2">
          <b-form-input type="number" size="sm" v-model.number="ingredientForm.cost" placeholder="値段" v-on:keyup.enter="appendIngredient" />
        </b-col>
        <b-col sm="2">
          円
        </b-col>
      </b-row>
      <br>
      <label>
        材料の調理の仕方: <br>
        <b-input-group>
          <b-form-input type="text" v-model="ingredientForm.description" />
            <b-input-group-append>
              <b-button variant="primary" v-on:click="appendIngredient">材料を追加する</b-button>
            </b-input-group-append>
        </b-input-group>
       </label>
    </label><br>

    <b-button variant="success" v-on:click="clickCreateButton" v-if="method == 'post'">メニューを追加</b-button>
    <b-button variant="success" v-on:click="clickUpdateButton" v-else>更新を適応</b-button>
  </div>
</template>

<style>
div #menu {
  padding: 1em;
  border: 1px solid #ccc;
}
</style>

<script>
export default {
  props: ['method', 'menu'],
  data () {
    return {
      genres: [],
      ingredientForm: {
        name: '',
        amount: '0',
        unit: '',
        cost: '0',
        description: ''
      },
      removeIngredientItemList: [],
      fields: [
        { key: 'name', label: '材料名' },
        { key: 'amount', label: '量' },
        { key: 'cost', label: '金額' },
        { key: 'description', label: '材料の説明' },
        { key: 'edit', label: '編集' },
        { key: 'delete', label: '削除' }
      ]
    }
  },
  methods: {
    appendIngredient: function () {
      if (this.ingredientForm.name) {
        this.menu.ingredients.push(this.ingredientForm)
        this.ingredientForm.name = ''
        this.ingredientForm.amount = 0
        this.ingredientForm.unit = ''
        this.ingredientForm.cost = 0
        this.ingredientForm.description = ''
      }
    },
    EditIngredientItem: function (indexNumber) {
      this.ingredientForm = this.menu.ingredients[indexNumber]
      this.menu.ingredients.splice(indexNumber, 1)
    },
    RemoveIngredientItem: function (indexNumber) {
      this.removeIngredientItemList.push(this.menu.ingredients[indexNumber])
      this.menu.ingredients.splice(indexNumber, 1)
    },
    clickCreateButton: function () {
      this.axios.post('http://localhost:4567/menu', JSON.stringify(this.menu)).then(response => {
        this.$router.push({name: 'MenuShow', params: {id: response.data.id}})
      }).catch(err => {
        console.log(err.response)
      })
    },
    clickUpdateButton: function () {
      let data = JSON.stringify(
        Object.assign(this.menu, {removeIngredientItemList: this.removeIngredientItemList})
      )
      let url = 'http://localhost:4567/menu/' + this.menu.id
      this.axios.post(url, data).then(response => {
        this.$router.push({name: 'MenuShow', params: {id: response.data.id}})
      }).catch(err => {
        console.log(err.response)
      })
    }
  },
  mounted: function () {
    this.axios.get('http://localhost:4567/genres').then(response => {
      this.genres = response.data
    }).catch(error => {
      console.log(error.response)
    })
  }
}
</script>
