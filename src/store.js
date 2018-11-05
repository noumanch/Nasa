import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info:[],
  },
  mutations: {
    getInfo(state, info){
      this.state.info = info;
    }

  },
  actions: {

  }

})
