<template>
  <div id="app">
    <todo-form  @salvarTarefa="salvaTarefa($event)"/>
    <todo-list/>
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue"
import TodoList from "./components/TodoList.vue"
export default {
  name: 'App',
  components: {
    TodoForm, 
    TodoList
  }, data: function(){
    return{
    }
  }
}

</script>

<style>

</style>
