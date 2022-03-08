<template>
    <v-app id="app-page">
        <!-- APP: LEFT NAVIGATION DRAWER -->
        <NavigationDrawer
            v-if="tabletAndDown()"
            :right="false"
        />

        <!-- APP: TOP TOOLBAR -->
        <AppToolbar
            id="app-toolbar"
            :title="appToolbarTitle"
        />

        <!-- APP: CONTENT -->
        <v-main>
            <AppContent/>
        </v-main>
        <!-- APP: FOOTER -->
        <AppFooter/>
    </v-app>
</template>

<script>
    import NavigationDrawer from './NavigationDrawer'
    import AppContent from './AppContent'
    import AppToolbar from './AppToolbar'
    import AppFooter from './AppFooter'
    import ContentHeader from './ContentHeader'
    import ui from '../mixins/ui'
    import postRouteNavigation from '../mixins/postRouteNavigation';
    import { mapGetters } from "vuex";

    export default {
        name: 'AppStructure',
        mixins: [ui, postRouteNavigation],
        scrollToTop: true,
        components: {
            NavigationDrawer,
            AppToolbar,
            AppContent,
            AppFooter,
            ContentHeader
        },
        props: {},
        computed: {
            ...mapGetters("AppState", {
                appToolbarTitle: "getAppToolbarTitle",
            }),
        },
        data() {
            return {}
        },
        mounted() {
            window.scrollTo(0, 0)
        },
        watch: {
            $route() {
                window.scrollTo(0, 0)
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>

