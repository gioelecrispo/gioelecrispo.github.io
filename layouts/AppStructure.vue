<template>
    <v-app id="app">
        <!-- APP: LEFT NAVIGATION DRAWER -->
        <NavigationDrawer
                v-if="tabletAndDown()"
                :right="false"
        />

        <!-- APP: TOP TOOLBAR -->
        <AppToolbar
                v-if="$store.state.showAppToolbar"
                id="app-toolbar"
                :title="$store.state.appToolbarTitle"
        />
        <!-- APP: CONTENT -->
        <v-main>
            <ContentHeader v-if="$store.state.showContentHeader"/>
            <AppContent/>
        </v-main>
        <!-- APP: FOOTER -->
        <AppFooter v-if="$store.state.showAppFooter"/>
    </v-app>
</template>

<script>
    import NavigationDrawer from "./NavigationDrawer";
    import AppContent from "./AppContent";
    import AppToolbar from "./AppToolbar";
    import AppFooter from "./AppFooter";
    import ContentHeader from "./ContentHeader";
    import ui from "../mixins/ui";

    export default {
        name: "AppStructure",
        mixins: [ui],
        components: {
            NavigationDrawer,
            AppToolbar,
            AppContent,
            AppFooter,
            ContentHeader,
        },
        props: {},
        computed: {

        },
        data() {
            return {
            };
        },
        methods: {
        }
    };
</script>

<style lang="scss">
    @import "../assets/styles/scss/commons";

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

</style>

