// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// GLOBAL IMPORTS
import Vue from "vue";

// Internal dependencies
import App from "@/pages/App";                // Basic template
import router from "@/routes/router.js";      // global router.js
import store from "@/store";                  // global state
import i18n from "@/plugins/i18n.js";         // internationalization
import vuetify from "@/plugins/vuetify";      // global framework


Vue.config.productionTip = false;

new Vue({
    store,
    router,
    i18n,
    vuetify,
    render: h => h(App)
}).$mount('#app');