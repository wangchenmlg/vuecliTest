import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numTest : 0
  },
  mutations: {
    addNumTest(state){
      state.numTest ++ ;
    }
  },
  actions: {

  }
})
