<template>
  <div class="todo">
    <div
      v-bind:class="statusClass"
      @click="toggleStatus"/>
    <h4 class="todo-title">{{ todo.title }}</h4>
    <div
      class="edit-todo"
      @click="$emit('editing-todo', todo)">Edit</div>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  data: () => {
    return {
      statusClass: {
        'active-todo': false,
        'done-todo': false,
        'todo-status': true,
      }
    }
  },
  methods: {
    toggleStatus() {
      const todo = this.todo
      const isActive = todo.status === 'active'

      todo.status = isActive ? 'done': 'active'
      this.changeStatusClass(!isActive)
    },
    changeStatusClass(isActive) {
      this.statusClass["active-todo"] = isActive
      this.statusClass["done-todo"] = !isActive
    }
  },
  mounted() {
    this.changeStatusClass(this.todo.status === 'active');
  },
}
</script>

<style lang="css">
.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo-status {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
}

.todo-title {
  margin-left: 10px;
  margin-right: auto;
}

.active-todo::before {
  position: absolute;
  content: '';
  width: 26px;
  height: 26px;
  margin: 2px;
  border-radius: 50%;
  background: blue;
}

.edit-todo {
  color: blue;
  margin-right: 0;
}

.edit-todo:hover {
  cursor: pointer;
}
</style>