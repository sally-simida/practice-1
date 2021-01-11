import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curList:{
      name:'剧集',
      color:'#fcccc0'},
  },
  mutations: {
    setChange(state,data){
      state.curList=data;
    }
  },
  actions: {
  },
  modules: {
  }
})
