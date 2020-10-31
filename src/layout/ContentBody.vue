<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <router-view />
  </transition>
</template>

<script>
export default {
    name: "ContentBody",
    data() {
        return {};
    },
    mounted () {
        let options = {
            duration: 700,
            offset: 0,
            easing: "easeInOutCubic",
        };
        let selector = "#app-toolbar";
        //this.$vuetify.goTo(selector, options);
    }
};
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .1s
    }

    .fade-enter,
    .fade-leave-to
        /* .fade-leave-active in <2.1.8 */
    {
        opacity: 0
    }
</style>
