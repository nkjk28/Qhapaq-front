<template>
  <div>
    <h2>ジャンル作成(追加)</h2>
    <genre-form method="post" :genre="genre"></genre-form>
  </div>
</template>

<script>
import GenreForm from '@/components/genres/_Form'
export default {
  name: 'GenreNew',
  components: { GenreForm },
  data () {
    return {
      genre: {
        name: '',
        description: ''
      }
    }
  }
}
</script>
