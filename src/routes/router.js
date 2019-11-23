// Setting Vue Router

// Import
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/routes/routes";

const router = new VueRouter({
    routes: routes,
    //mode: 'history',
    linkExactActiveClass: "nav-item active",
});

Vue.use(VueRouter);

export default router;
