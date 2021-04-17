<template>
    <v-container id="app-content">
        <v-row class="pa-0 ma-0">
            <transition
                name="fade"
                mode="out-in"
            >
                <Nuxt/>
            </transition>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "AppContent",
        components: {
        },
        methods: {

        }
    };
</script>

<style lang="scss" scoped>
</style>

