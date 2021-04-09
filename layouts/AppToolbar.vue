<template>
    <v-app-bar
            app
            :elevate-on-scroll="elevateOnScroll"
            :collapse="false"
            :short="false"

            :color="setToolbarColor()"
            :dark="$store.state.showAppToolbarImage"
            :src="$store.state.showAppToolbarImage ? getAppToolbarImage() : ''"
            :fade-img-on-scroll="$store.state.showAppToolbarImage"
            :shrink-on-scroll="$store.state.showAppToolbarImage"
            :prominent="$store.state.showAppToolbarImage"
            :scroll-threshold="$store.state.showAppToolbarImage ? '150': ''"
            :height="$store.state.showAppToolbarImage ? '350': ''"
    >
        <template
                v-if="$store.state.showAppToolbarImage"
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
                @click.stop="toggleLeftNavBar()"
        >
            <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-toolbar-title
                v-if="tabletAndDown() || $store.state.showAppToolbarImage"
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
                @click="$router.push(element.path)"
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
                return this.$store.state.showAppNavigationDrawer && this.tabletAndDown();
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
                    color = '#0055DD';
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
