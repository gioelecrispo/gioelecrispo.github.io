<template>
    <v-app-bar
            app
            :elevate-on-scroll="elevateOnScroll"
            :collapse="false"
            :short="false"

            :color="setToolbarColor()"
            :dark="$route.meta.showAppToolbarImage"
            :src="$route.meta.showAppToolbarImage ? getAppToolbarImage() : ''"
            :fade-img-on-scroll="$route.meta.showAppToolbarImage"
            :shrink-on-scroll="$route.meta.showAppToolbarImage"
            :prominent="$route.meta.showAppToolbarImage"
            :scroll-threshold="$route.meta.showAppToolbarImage ? '250': ''"
            :height="$route.meta.showAppToolbarImage ? '350': ''"
    >
        <template
                v-if="$route.meta.showAppToolbarImage"
                v-slot:img="{ props }"
        >
            <v-img
                    v-bind="props"
                    gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            />
        </template>
        <v-btn
                v-if="showNavigationDrawerIcon"
                icon
                @click.stop="toggleLeftNavBar()"
        >
            <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-toolbar-title
                v-if="tabletAndDown() || $route.meta.showAppToolbarImage"
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
                @click="navigate(element.path)"
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
        data() {
            return {
            }
        },
        created() {
            console.log(this.$route);
        },
        computed: {
            ...mapGetters("AppState", {
                isLeftNavDrawer: "isLeftNavDrawer",
                isDark: "isDark",
                appToolbarElements: "getNavLinks",
                appToolbarImage: "getAppToolbarImage",
            }),
            showNavigationDrawerIcon() {
                return this.$route.meta.showNavigationDrawer && this.tabletAndDown();
            },
            elevateOnScroll() {
                return true;
            }
        },
        props: ["title"],
        methods: {
            toggleLeftNavBar() {
                this.$store.dispatch("AppState/setLeftNavDrawer", true);
            },
            setTheme() {
                this.$store.dispatch("AppState/setIsDark", !this.isDark);
                this.$vuetify.theme.dark = this.isDark === true;
            },
            setToolbarColor() {
                let color = "toolbars";
                if (this.$route.meta.showContentHeader) {
                    color = "transparent";
                } else if (this.$route.meta.showAppToolbarImage) {
                    color = '#AAAAEE';
                }
                return color;
            },
            getAppToolbarImage() {
                if (this.appToolbarImage) {
                    return this.appToolbarImage;
                }
                return 'https://picsum.photos/1920/1080?random';
            }
        },
    };
</script>

<style lang="scss" scoped>

</style>
