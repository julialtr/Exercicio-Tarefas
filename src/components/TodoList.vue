<template>
  <div id="caixa">
      <h2>Lista de coisas para fazer</h2>
      <div id="caixinhas" v-for="(caixa, index) in caixinhas" :key="index">
          {{caixa.descricao}}
      </div>
  </div>
  
</template>

<script>
export default {
    name: "TodoList",
    computed:{
        caixinhas(){
            return this.$store.state.caixinhas
        }
    }
}
</script>

<style>
    #caixa{
        margin: 30px auto 10px auto;
        width: 550px;
        height: 160px;
        border: white 1px solid;
        border-radius: 5px;
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
    }
    #caixinhas{
        width: (caixinhas);
        height: 50px;
        border: 1px rgb(63, 60, 60) solid;
        background-color: rgb(63, 60, 60);
        border-radius: 5px;
        text-align: center;
        line-height: 50px;
        margin: 0 5px 5px 5px;
        font-family: cursive;
        color: white;
        font-size: 13px;
        
    }
    h2{
        font-family: cursive;
        margin: 0 100px 0 120px;
        }
</style>