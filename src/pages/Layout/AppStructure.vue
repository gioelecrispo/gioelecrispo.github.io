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
      :title="$route.meta.toolbarTitle"
    />

    <!-- APP: CONTENT -->
    <v-main>
      <AppContent />
    </v-main>
    <!-- APP: FOOTER -->
    <AppFooter v-if="$route.meta.showAppFooter" />
  </v-app>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import NavigationDrawer from "@/pages/Layout/NavigationDrawer";
import AppContent from "@/pages/Layout/AppContent";
import AppToolbar from "@/pages/Layout/AppToolbar";
import AppFooter from "@/pages/Layout/AppFooter";

export default {
    name: "AppStructure",
    components: {
        NavigationDrawer,
        AppToolbar,
        AppContent,
        AppFooter
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
        return {

        };
    },
    methods: {
        tabletAndDown() {
            return this.$vuetify.breakpoint.name === "xs" ||
                this.$vuetify.breakpoint.name === "sm";
        },
    }
};
</script>

<style lang="scss" scoped>
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

