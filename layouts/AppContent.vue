<template>
    <v-container id="app-content">
        <v-row class="pa-0 ma-0">
            <ContentBody/>
        </v-row>
        <ContentFooter v-if="$store.state.showContentFooter"/>
    </v-container>
</template>

<script>
    import ContentBody from './ContentBody'
    import ContentFooter from './ContentFooter'

    export default {
        name: "AppContent",
        components: {
            ContentBody,
            ContentFooter,
        },
        methods: {

        }
    };
</script>

<style lang="scss" scoped>
</style>

