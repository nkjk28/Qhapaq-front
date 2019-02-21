<template>
  <div id="menu">
    <!-- {{ hogeData }} -->
    <label for="genre">ジャンル:
      <b-select name="genre" v-model="menu.genre_id">
        <option v-for="genre in genres" :value="genre.id" v-bind:key="genre.id">
        {{ genre.name}}
        </option>
      </b-select>
    </label>

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
        <b-button variant="success" @click="EditIngredientItem(row.index)">✑</b-button>
      </template>

      <template slot="delete" slot-scope="row">
        <b-button variant="danger" @click="RemoveIngredientItem(row.index)">✗</b-button>
      </template>
    </b-table>

    <label>材料:
      <b-row>
        <b-col sm="2">
          <b-form-input type="text" size="sm" v-model="ingredientForm.name" placeholder="材料名"/>
        </b-col>
          は一人あたり
        <b-col sm="2">
          <b-form-input type="number" size="sm" v-model="ingredientForm.amount" placeholder="量" />
        </b-col>
        <b-col sm="2">
          <b-select v-model="ingredientForm.unit">
            <option value="g">g</option>
            <option value="ml">ml</option>
            <option value="枚">枚</option>
            <option value="匹">匹</option>
            <option value="個">個</option>
            <option value="羽">羽</option>
            <option value="大匙">大匙</option>
            <option value="小匙">小匙</option>
          </b-select>
        </b-col>
        で
        <b-col sm="2">
          <b-form-input type="number" size="sm" v-model="ingredientForm.cost" placeholder="値段" v-on:keyup.enter="appendIngredient"/>
        </b-col>
          円
      </b-row>
    </label>
    <b-button variant="primary" @click="appendIngredient">材料を追加する</b-button><br><br>

    <b-table :items="menu.steps" :fields="stepFields">
      <template slot="num" slot-scope="row">
        {{ row.index + 1 }}
      </template>

      <template slot="description" slot-scope="row">
        {{ row.item.description }}
      </template>

      <template slot="edit" slot-scope="row">
        <b-button variant="success" @click="EditStepItem(row.index)">✑</b-button>
      </template>

      <template slot="delete" slot-scope="row">
        <b-button variant="danger" @click="RemoveStepItem(row.index)">✗</b-button>
      </template>

    </b-table>
    <label>
      工程:
      <b-input-group>
        <b-form-input type="text" v-model="stepForm" v-on:keyup.enter="appendStep"/>
          <b-input-group-append>
            <b-button variant="primary" @click="appendStep">工程を追加する</b-button>
          </b-input-group-append>
        </b-input-group>
    </label><br>

    <b-button variant="success" @click="clickCreateButton" v-if="method == 'post'" v-bind:disabled="!(Boolean(menu.genre_id && menu.name && menu.ingredients.length))">
      メニューを追加
    </b-button>
    <b-button variant="success" @click="clickUpdateButton" v-else>更新を適応</b-button>
  </div>
</template>

<style>
div #menu {
  padding: 1em;
  border: 1px solid #ccc;
}
</style>

<script>
import { mapState } from 'vuex'

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
      stepForm: '',
      removeStepItemList: [],
      fields: [
        { key: 'name', label: '材料名' },
        { key: 'amount', label: '量' },
        { key: 'cost', label: '金額' },
        { key: 'description', label: '材料の説明' },
        { key: 'edit', label: '編集' },
        { key: 'delete', label: '削除' }
      ],
      stepFields: [
        { key: 'num', label: '順序' },
        { key: 'description', label: '説明' },
        { key: 'edit', label: '編集' },
        { key: 'delete', label: '削除' }
      ]
    }
  },
  methods: {
    appendStep: function () {
      if (this.stepForm) {
        this.menu.steps.push({description: this.stepForm})
      }
      this.stepForm = ''
    },
    appendIngredient: function () {
      if (this.ingredientForm.name) {
        const data = Object.assign({}, this.ingredientForm)
        this.menu.ingredients.push(data)
        this.ingredientForm.name = ''
        this.ingredientForm.amount = '0'
        this.ingredientForm.unit = ''
        this.ingredientForm.cost = '0'
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
    EditStepItem: function (indexNumber) {
      this.stepForm = this.menu.steps[indexNumber].description
      this.menu.steps.splice(indexNumber, 1)
    },
    RemoveStepItem: function (indexNumber) {
      this.removeStepItemList.push(this.menu.steps[indexNumber])
      this.menu.steps.splice(indexNumber, 1)
    },
    clickCreateButton: function () {
      let data = JSON.stringify(
        Object.assign(this.menu, {userToken: this.user.token})
      )
      this.axios.post(process.env.API_ENDPOINT + 'menu', data).then(response => {
        this.$router.push({name: 'MenuShow', params: {id: response.data.id}})
      }).catch(err => {
        if (err.response.status === 403) {
          this.$router.push({name: 'Error', params: {code: 403}})
        }
      })
    },
    clickUpdateButton: function () {
      let data = JSON.stringify(
        Object.assign(this.menu, {
          removeIngredientItemList: this.removeIngredientItemList,
          removeStepItemList: this.removeStepItemList,
          userToken: this.user.token
        })
      )
      let url = process.env.API_ENDPOINT + 'menu/' + this.menu.id
      this.axios.post(url, data).then(response => {
        this.$router.push({name: 'MenuShow', params: {id: response.data.id}})
      }).catch(err => {
        if (err.response.status === 403) {
          this.$router.push({name: 'Error', params: {code: 403}})
        }
      })
    }
  },
  computed: {
    ...mapState('account', ['user'])
  },
  mounted: function () {
    this.axios.get(process.env.API_ENDPOINT + 'genres').then(response => {
      this.genres = response.data
    }).catch(error => {
      console.log(error.response)
    })
  }
}
</script>
