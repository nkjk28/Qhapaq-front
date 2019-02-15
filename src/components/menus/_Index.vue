<template>
  <div>
    <b-table striped hover :items="menus" :fields="fields" >
      <template slot='show' slot-scope="row">
        <b-button size="sm"  variant="primary" :to="{name: 'MenuShow', params: {id: row.item.id}}" class="mr-1">Show</b-button>
      </template>
      <template slot="edit" slot-scope="row">
        <b-button size="sm" variant="success" :to="{name: 'MenuEdit', params: {id: row.item.id}}" class="mr-1">Edit</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: ['menus'],
  data () {
    return {
      fields: [
        { key: 'id', label: 'id' },
        { key: 'name', label: 'メニュー名', sortable: true },
        { key: 'show', label: '表示' },
        { key: 'edit', label: '編集' }
      ]
    }
  }
}
</script>
