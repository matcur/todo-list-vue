<template>
  <div id="app">
    <todo-list/>
  </div>
</template>

<script>
import TodoList from './components/todo-list/List.vue'

export default {
  name: 'App',
  components: {
    TodoList: TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
