<template>
  <div>
    <h2>メニュー追加</h2>
    <label for="genre">ジャンル:
      <select name="genre" v-model="newMenu.genre_id">
        <option v-for="genre in genres" :value="genre.id" v-bind:key="genre.id">
        {{ genre.name}}
        </option>
      </select>
    </label><br><br>
    <label>メニュー名: <input type="name" v-model="newMenu.name" /> </label><br>
    <ul>
      <li v-for="(v,i) in newMenu.ingredients" v-bind:key="i">
        {{v.name}}は一人あたり{{v.amount}}{{v.unit.text}}({{v.cost}}円)
      </li>
    </ul>
    <label>材料: <br>
      <input type="text" v-model="ingredientForm.name" placeholder="材料名"/>は一人あたり
      <input type="text" v-model="ingredientForm.amount" placeholder="量">
      <select v-model="ingredientForm.unit">
        <option value="g}">g</option>
        <option value="ml">ml</option>
        <option value="枚">枚</option>
        <option value="匹">匹</option>
        <option value="個">個</option>
        <option value="羽">羽</option>
      </select>
      で
      <input type="text" v-model="ingredientForm.cost" placeholder="値段">円<br>
    調理の仕方: <br>
    <textarea rows="5" cols="100" v-model="ingredientForm.description"> </textarea>
    </label><br>
    <button v-on:click="appendIngredient">材料を追加する</button>
    <br> <br>
    <button v-on:click="clickCreateButton">メニューを追加</button>
  </div>
</template>

<script>
export default {
  name: 'MenuNew',
  data () {
    return {
      genres: [],
      ingredientForm: {
        name: '',
        amount: 0,
        unit: {enum: 0, text: 'g'},
        cost: 0,
        description: ''
      },
      newMenu: {
        name: '',
        genre_id: 0,
        ingredients: []
      }
    }
  },
  methods: {
    appendIngredient: function () {
      this.newMenu.ingredients.push({
        name: this.ingredientForm.name,
        amount: this.ingredientForm.amount,
        unit: this.ingredientForm.unit,
        cost: this.ingredientForm.cost,
        description: this.ingredientForm.description
      })
      this.ingredientForm.name = ''
      this.ingredientForm.amount = 0
      this.ingredientForm.unit = {enum: 0, text: 'g'}
      this.ingredientForm.cost = 0
      this.ingredientForm.description = ''
    },
    clickCreateButton: function () {
      this.axios.post('http://localhost:4567/menu', JSON.stringify(this.newMenu)).then(response => {
        console.log(response)
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
