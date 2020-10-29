import Vue from "vue";
import Vuex from "vuex";

// Modules
import AppState from "./modules/AppState";
import DataState from "./modules/DataState";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        AppState,
        DataState,
    }
});
