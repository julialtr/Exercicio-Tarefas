<template>
  <div id="app">
    <todo-form :caixinhas="caixinhas" @salvarTarefa="salvaTarefa($event)"/>
    <todo-list :caixinhas="caixinhas"/>
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
      caixinhas:[{
        descricao: "Estudar Vue"
      }, {
        descricao: "Estudar Física"
      }, {
        descricao: "Jogar videogame"
      }
      ]
    }
  }, methods: {
    salvaTarefa: function(event){
     this.caixinhas.push(event.descricao);
    }
  }
}
</script>

<style>

</style>
