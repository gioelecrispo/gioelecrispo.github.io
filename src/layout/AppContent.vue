<template>
    <v-container id="app-content">
        <ContentToolbar v-if="$route.meta.showContentToolbar"/>
        <v-row class="pa-0 ma-0">
            <ContentBody/>
        </v-row>
        <ContentFooter v-if="$route.meta.showContentFooter"/>
    </v-container>
</template>

<script>
    import ContentHeader from "@/layout/ContentHeader";
    import ContentToolbar from "@/layout/ContentToolbar";
    import ContentBody from "@/layout/ContentBody";
    import ContentFooter from "@/layout/ContentFooter";

    export default {
        name: "AppContent",
        components: {
            ContentHeader,
            ContentToolbar,
            ContentBody,
            ContentFooter,
        },
        methods: {

        }
    };
</script>

<style lang="scss" scoped>
</style>

