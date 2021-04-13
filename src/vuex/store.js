import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, status: 'active', title: 'first title' },
      { id: 2, status: 'active', title: 'second title' },
      { id: 3, status: 'done', title: 'third title' },
    ],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    remove(state, todo) {
      const i = state.todos.indexOf(todo)
      state.todos.splice(i, 1);
    }
  }
})

export { store };