import Vue from 'vue'
import Vuex from 'vuex'
import loggin from './modules/login'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    loggin
  },
  getters
})

export default store
