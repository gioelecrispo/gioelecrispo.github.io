<template>
    <v-app id="app">
        <!-- APP: LEFT NAVIGATION DRAWER -->
        <NavigationDrawer
                v-if="tabletAndDown()"
                :right="false"
        />

        <!-- APP: TOP TOOLBAR -->
        <AppToolbar
                v-if="$route.meta.showAppToolbar"
                id="app-toolbar"
                :title="$route.meta.toolbarTitle"
        />
        <!-- APP: CONTENT -->
        <v-main>
            <ContentHeader v-if="$route.meta.showContentHeader"/>
            <AppContent/>
        </v-main>
        <!-- APP: FOOTER -->
        <AppFooter v-if="$route.meta.showAppFooter"/>
    </v-app>
</template>

<script>
    import {mapGetters, mapState} from "vuex";
    import NavigationDrawer from "@/layout/NavigationDrawer";
    import AppContent from "@/layout/AppContent";
    import AppToolbar from "@/layout/AppToolbar";
    import AppFooter from "@/layout/AppFooter";
    import ContentHeader from "@/layout/ContentHeader";
    import UserIntro from "../components/UserIntro";

    export default {
        name: "AppStructure",
        components: {
            NavigationDrawer,
            AppToolbar,
            AppContent,
            AppFooter,
            ContentHeader,
            UserIntro
        },
        props: {},
        computed: {
            ...mapState({}),
            ...mapGetters("AppState", {
                hasSplashed: "hasSplashed",
                isLeftNavDrawer: "isLeftNavDrawer",
                isLeftTempNavDrawer: "isLeftTempNavDrawer",
            })
        },
        data() {
            return {};
        },
        methods: {
            tabletAndDown() {
                return this.$vuetify.breakpoint.name === "xs" ||
                    this.$vuetify.breakpoint.name === "sm";
            },
        }
    };
</script>

<style lang="scss">
    @import "../assets/styles/scss/animations";

    @import url('https://fonts.googleapis.com/css? family=Oxygen:300,400,700&display=swap');
    @import url('https://fonts.googleapis.com/css? family=Comfortaa&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

    $body-font-family: 'Lato';
    $title-font: 'Comfortaa';

    .v-application {
        font-family: $body-font-family, sans-serif !important;

        .title { // To pin point specific classes of some components
            font-family: $title-font, sans-serif !important;
        }
    }



    .parallax1 {
        /* The image used */
        background-image: url("../assets/img/img_parallax.jpg");
        opacity: .35;
        z-index: -1;
        /* Set a specific height */
        height: 100vh;

        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>

