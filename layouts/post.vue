<template>
    <v-app id="app">
        <!-- APP: LEFT NAVIGATION DRAWER -->
        <client-only>
        <NavigationDrawer
                v-if="tabletAndDown()"
                :right="false"
        />
        </client-only>

        <!-- APP: TOP TOOLBAR -->
        <client-only>
        <AppToolbar
                id="app-toolbar"
                title="Post"
                :image="require('@/assets/img/blog/' + appToolbarImage)"
        />
        </client-only>
        <!-- APP: CONTENT -->
        <v-main>
                <!-- <v-img style="margin-top: -64px;" height="350px"
                        :src="require('@/assets/img/blog/' + appToolbarImage)"
                        gradient="to top right, rgba(0,100,205,0.7), rgba(0,2,216,0.7)"
                />-->
            <AppContent/>
        </v-main>
        <!-- APP: FOOTER -->
        <AppFooter/>
    </v-app>
</template>

<script>
    import { mapGetters } from "vuex";
    import NavigationDrawer from "./NavigationDrawer";
    import AppContent from "./AppContent";
    import AppToolbar from "./AppToolbar";
    import AppFooter from "./AppFooter";
    import ui from "../mixins/ui";
    import postRouteNavigation from '../mixins/postRouteNavigation';

    export default {
        name: "AppStructure",
        mixins: [ui, postRouteNavigation],
        scrollToTop: true,
        components: {
            NavigationDrawer,
            AppToolbar,
            AppContent,
            AppFooter,
        },
        props: {},
        computed: {
            ...mapGetters("AppState", {
                appToolbarImage: "getAppToolbarImage",
            }),
        },
        data() {
            return {
            };
        },
        mounted() {
            window.scrollTo(0,0);
        },
        watch: {
            $route() {
                window.scrollTo(0,0);
            }
        }
    };
</script>

<style lang="scss" scoped>
</style>

