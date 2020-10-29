// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// GLOBAL IMPORTS
import Vue from "vue";

// Internal dependencies
import App from "@/pages/App";                // Basic template
import router from "@/routes/router.js";      // global router.js
import store from "@/store";                  // global state
import vuetify from "@/plugins/vuetify";      // global framework


Vue.config.productionTip = false;

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount("#app");
