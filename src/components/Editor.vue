<template>
  <div class="editor">
    <h1>Editor</h1>
    <form>

      <label for="title">Title</label>
      <input type="text" id="title" v-model="title" placeholder="Enter Title">

      <label for="text">Text</label>
      <textarea id="text" rows="20"></textarea>

      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as types from '../store/types'

export default {
  name: 'editor',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      activeNote: state => state.activeNote
    }),
    title: {
      get () {
        return this.activeNote.title
      },
      set (value) {
        this.$store.commit(types.EDITOR_SAVE_TITLE, value)
      }
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  textarea
    height 10rem
</style>
