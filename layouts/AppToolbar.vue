<template>
    <v-app-bar
            app
            elevate-on-scroll
            :short="false"
            :dense="false"
            color="white"
            :color="setToolbarColor()"
            :dark="image !== undefined"
            :src="image !== undefined ? image : ''"
            :fade-img-on-scroll="image !== undefined"
            :shrink-on-scroll="image !== undefined"
            :prominent="image !== undefined"
            :scroll-threshold="image !== undefined ? '150': ''"
            :height="image !== undefined ? '350': ''"
    >
        <template
                v-if="image !== undefined"
                v-slot:img="{ props }"
        >
            <v-img
                    v-bind="props"
                    gradient="to top right, rgba(0,100,205,0.7), rgba(0,2,216,0.7)"
            />
        </template>
        <v-btn
                v-if="showNavigationDrawerIcon"
                icon
                @click.stop="toggleLeftNavBar(true)"
        >
            <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-toolbar-title
                v-if="tabletAndDown() || image !== undefined"
                class="pl-1 pr-3"
        >
            <h3>{{ title }}</h3>
        </v-toolbar-title>
        <v-spacer/>
        <v-row align="center" justify="end">
        <v-btn
                icon
                @click="setTheme()"
        >
            <v-icon>{{ isDark ? "mdi-white-balance-sunny" : "far fa-moon" }}</v-icon>
        </v-btn>
        <v-btn
                v-for="element in appToolbarElements"
                v-if="!showNavigationDrawerIcon"
                :key="element.id"
                :class="$route.path === element.path ? 'active-button' : ''"
                :color="$route.path === element.path ? 'primary' : ''"
                text tile
                large
                nuxt
                :to="element.path"
        >
            <v-icon class="mr-1">
                {{ element.icon }}
            </v-icon>
            {{ element.title }}
        </v-btn>
        </v-row>
    </v-app-bar>
</template>

<script>
    import {mapGetters} from "vuex";
    import ui from "../mixins/ui";

    export default {
        name: "AppToolbar",
        components: {},
        mixins: [ui],
        props: ["title", "image"],
        data() {
            return {
            }
        },
        created() {
        },
        computed: {
            ...mapGetters("AppState", {
                isLeftNavDrawer: "isLeftNavDrawer",
                isDark: "isDark",
                appToolbarElements: "getNavLinks",
            }),
            showNavigationDrawerIcon() {
                return this.tabletAndDown();
            },
        },
        methods: {
            toggleLeftNavBar(value) {
                this.$store.dispatch("AppState/setLeftNavDrawer", value);
            },
            setTheme() {
                this.$store.dispatch("AppState/setIsDark", !this.isDark);
                this.$vuetify.theme.dark = this.isDark === true;
            },
            setToolbarColor() {
                let color = "toolbars";
                if (this.image) {
                    color = '#0055DD';
                }
                return color;
            },
        },
    };
</script>

<style lang="scss" scoped>

</style>
