<template>
  <div class="new-todo">
    <input
      type="text"
      class="new-todo-input"
      v-model="todo.title"/>
    <button
      class="btn new-todo-btn"
      @click="addNewTodo">
      Add
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      default: () => ({ title: '', done: false }),
      type: Object,
    },
  },
  methods: {
    addNewTodo() {
      this.$emit('adding-new-todo', {...this.todo})

      this.todo.title = ''
    }
  },
}
</script>

<style scoped>

</style>