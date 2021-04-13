<template>
  <div class="todo-list">
    <new-todo
      :todo="newTodo"
      @adding-new-todo="addNewTodo"/>
    <todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @editing-todo="editTodo"/>
  </div>
</template>

<script>
import NewTodo from './NewTodo'
import Todo from './Todo'
import {mapState} from "vuex";

export default {
  data: () => {
    return  {
      newTodo: { status: 'active', title: '' },
    }
  },
  computed: mapState({
    todos: state => state.todos,
  }),
  components: {
    NewTodo: NewTodo,
    Todo: Todo,
  },
  methods: {
    addNewTodo(todo) {
      const lastId = this.todos.reduce(
          (lastId, todo) => todo.id > lastId? todo.id: lastId
      )
      this.$store.commit('addTodo', { ...todo, id: lastId + 1 });
    },
    editTodo(todo) {
      this.$store.commit('remove', { todo })

      this.newTodo = todo
    }
  }
}
</script>

<style lang="css">
</style>