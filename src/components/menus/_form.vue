<template>
  <div>
    <!-- {{ hogeData }} -->
    <label for="genre">ジャンル:
      <select name="genre" v-model="menu.genre_id">
        <option v-for="genre in genres" :value="genre.id" v-bind:key="genre.id">
        {{ genre.name}}
        </option>
      </select>
    </label><br><br>
    <label>メニュー名: <input type="name" v-model="menu.name" /> </label><br>
    <ul>
      <li v-for="(v,i) in menu.ingredients" v-bind:key="i">
        {{i}}: {{v.name}}は一人あたり{{v.amount}}{{v.unit}}({{v.cost}}円)
        <button v-on:click="EditIngredientItem(i)">✎</button>
        <button v-on:click="RemoveIngredientItem(i)">✗</button>
      </li>
    </ul>
    <label>材料: <br>
      <input type="text" v-model="ingredientForm.name" placeholder="材料名"/>は一人あたり
      <input type="text" v-model="ingredientForm.amount" placeholder="量">
      <select v-model="ingredientForm.unit">
        <option value="g">g</option>
        <option value="ml">ml</option>
        <option value="枚">枚</option>
        <option value="匹">匹</option>
        <option value="個">個</option>
        <option value="羽">羽</option>
      </select>
      で
      <input type="text" v-model="ingredientForm.cost" placeholder="値段" v-on:keyup.enter="appendIngredient">円<br>
      調理の仕方: <br>
      <textarea rows="5" cols="100" v-model="ingredientForm.description"> </textarea>
    </label><br>
    <button v-on:click="appendIngredient">材料を追加する</button>
    <br> <br>
    <button v-on:click="clickCreateButton" v-if="method == 'post'">メニューを追加</button>
    <button v-on:click="clickUpdateButton" v-else>更新を適応</button>
  </div>
</template>

<script>
export default {
  props: ['method', 'menu'],
  data () {
    return {
      genres: [],
      ingredientForm: {
        name: '',
        amount: 0,
        unit: '',
        cost: 0,
        description: ''
      },
      removeIngredientItemList: []
    }
  },
  methods: {
    appendIngredient: function () {
      if (this.ingredientForm.name) {
        this.menu.ingredients.push({
          name: this.ingredientForm.name,
          amount: this.ingredientForm.amount,
          unit: this.ingredientForm.unit,
          cost: this.ingredientForm.cost,
          description: this.ingredientForm.description
        })
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
