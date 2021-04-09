<template>
    <transition
            name="fade"
            mode="out-in"
    >
        <Nuxt/>
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
