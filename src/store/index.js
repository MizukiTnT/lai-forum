import Vue from 'vue'
import Vuex from 'vuex'
import loggin from './modules/login'
import comm from './modules/comm'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    loggin, comm
  },
  getters
})

export default store
