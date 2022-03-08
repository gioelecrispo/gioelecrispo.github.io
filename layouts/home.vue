<template>
    <v-app id="app-home">
        <!-- APP: CONTENT -->
        <v-main>
            <ContentHeader/>
            <HomeContent/>
        </v-main>
        <!-- APP: FOOTER -->
        <AppFooter/>
    </v-app>
</template>

<script>
    import HomeContent from "./HomeContent";
    import AppFooter from "./AppFooter";
    import ContentHeader from "./ContentHeader";
    import ui from "../mixins/ui";
    import postRouteNavigation from '../mixins/postRouteNavigation';

    export default {
        name: "AppStructure",
        mixins: [ui, postRouteNavigation],
        scrollToTop: true,
        components: {
            HomeContent, //: () => () => import("./AppContent"),
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

