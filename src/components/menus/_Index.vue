<template>
  <div>
    <div class="buscar-caja">
      <input type="text" class="buscar-txt" placeholder="Buscar..." v-model="search"/>
      <a class="buscar-btn">
        <font-awesome-icon  icon="search"/>
      </a>
    </div>
    <b-table striped hover :items="menus" :fields="fields" :filter="search">
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
      search: '',
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

<style>
.buscar-caja {
  position: absolute;
  top: 150px;
  left: 80%;
  transform: translate(-50%, -50%);
  background: #2f3640;
  /* height: 40px; */
  border-radius: 40px;
  /* padding: 10px; */
}

.buscar-caja:hover > .buscar-txt {
  width: 140px;
  padding: 0 6px;
}

.buscar-caja:hover > .buscar-btn {
  background: #fb7f7f;
  color: black;
}

.buscar-btn {
  color: #e84118;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2f3640;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  color: white;
  cursor: pointer;
}

.buscar-btn > font-awesome-icon {
  font-size: 30px;
}

.buscar-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
  font-weight: bold;
}

</style>
