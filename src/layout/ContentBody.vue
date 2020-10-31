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
};
</script>

<style>
</style>
