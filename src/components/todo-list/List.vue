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

export default {
  data: () => {
    return  {
      todos: [
        { id: 1, status: 'active', title: 'first title' },
        { id: 2, status: 'active', title: 'second title' },
        { id: 3, status: 'done', title: 'third title' },
      ],
      newTodo: { status: 'active', title: '' },
    }
  },
  components: {
    NewTodo: NewTodo,
    Todo: Todo,
  },
  methods: {
    addNewTodo(todo) {
      const lastId = this.todos.reduce(
          (lastId, todo) => todo.id > lastId? todo.id: lastId
      )
      this.todos.push({...todo, id: lastId + 1});
    },
    editTodo(todo) {
      const i = this.todos.indexOf(todo)
      this.todos.splice(i, 1);

      this.newTodo = todo
    }
  }
}
</script>

<style lang="css">
</style>