<template>
  <div id="caixa2">
      <h2>Cadastro de Tarefas</h2>
      <input v-model="descricao" id="placeholder" type="text" placeholder="Nova tarefa">
      <button id="botao" @click="salvaTarefa()">OK</button>
  </div>
</template>

<script>
export default {
name: "TodoForm",
props: ['caixinhas'],
data: function(){
    return{
        descricao: ''
    }
}, methods: {
    salvaTarefa: function(){
        this.$emit('salvarTarefa', {
            descricao: this.descricao
        })
    }
}}
</script>

<style>
    #caixa2{
        height: 100px;
        width: 550px;
        border: 1px white solid;
        border-radius: 5px;
        background-color: white;
        margin: 30px auto 10px auto;
    }
    #placeholder{
        text-align: center;
        height: 30px;
        border: 2px rgb(63, 60, 60) solid;
        border-radius: 5px;
        font-family: cursive;
        font-size: 15px;
        margin: 10px 30px 10px 90px;
    }
    #botao{
        height: 37px;
        width: 50px;
        border: 2px rgb(63, 60, 60) solid;
        border-radius: 5px;
        font-family: cursive;
        background-color: rgb(63, 60, 60);
        color: white;
        cursor: pointer;
    }
</style>