import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import AppState from './modules/AppState'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AppState,
  }
})
