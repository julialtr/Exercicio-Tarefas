
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    caixinhas:[{
        descricao: "Estudar Vue"
      }, {
        descricao: "Estudar Física"
      }, {
        descricao: "Jogar videogame"
      }
      ]    
  },
  mutations: {
    salvaTarefa: function(state, texto){
        state.caixinhas.push(texto)
    }
  },
  actions: {
  },
  modules: {
  }
})
