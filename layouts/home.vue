<template>
    <v-app id="app" >
        <!-- APP: CONTENT -->
        <v-main>
            <ContentHeader/>
            <AppContent/>
        </v-main>
        <!-- APP: FOOTER -->
        <AppFooter/>
    </v-app>
</template>

<script>
    import AppContent from "./AppContent";
    import AppFooter from "./AppFooter";
    import ContentHeader from "./ContentHeader";
    import ui from "../mixins/ui";
    import postRouteNavigation from '../mixins/postRouteNavigation';

    export default {
        name: "AppStructure",
        mixins: [ui, postRouteNavigation],
        scrollToTop: true,
        components: {
            AppContent, //: () => () => import("./AppContent"),
            AppFooter,
            ContentHeader,
        },
        props: {},
        computed: {

        },
        data() {
            return {}
        },
    };
</script>

<style lang="scss" scoped>


</style>

