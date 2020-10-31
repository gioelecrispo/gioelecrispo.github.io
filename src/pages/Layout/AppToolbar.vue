<template>
    <v-app-bar
            app
            :elevate-on-scroll="elevateOnScroll"
            :collapse="false"
            :short="false"

            :color="setToolbarColor()"
            :dark="$route.meta.showAppToolbarImage"
            :src="$route.meta.showAppToolbarImage ? 'https://picsum.photos/1920/1080?random' : ''"
            :fade-img-on-scroll="$route.meta.showAppToolbarImage"
            :shrink-on-scroll="$route.meta.showAppToolbarImage"
            :prominent="$route.meta.showAppToolbarImage"
            :scroll-threshold="$route.meta.showAppToolbarImage ? '400': ''"
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
                text
                large
                @click="navigate(element.path)"
        >
            <v-icon class="mr-1">
                {{ element.icon }}
            </v-icon>
            {{ element.title }}
        </v-btn>
        </v-row>
       <!-- <v-toolbar-items>
            <v-btn
                    v-for="element in appToolbarElements"
                    v-if="!showNavigationDrawerIcon"
                    :key="element.id"
                    text
                    small
                    @click="navigate(element.path)"
            >
                <v-icon class="mr-1">
                    {{ element.icon }}
                </v-icon>
                {{ element.title }}
            </v-btn>
        </v-toolbar-items>-->
    </v-app-bar>
</template>

<script>
    import {mapGetters} from "vuex";
    import RouterService from "@/helpers/RouterService";

    export default {
        name: "AppToolbar",
        components: {},
        computed: {
            ...mapGetters("AppState", {
                isLeftNavDrawer: "isLeftNavDrawer",
                isLeftTempNavDrawer: "isLeftTempNavDrawer",
                appToolbarElements: "getNavLinks",
            }),
            showNavigationDrawerIcon() {
                return this.$route.meta.showNavigationDrawer && this.tabletAndDown();
            },
            elevateOnScroll() {
                return true;
            },
            appBarColor() {
                if (this.tabletAndDown()) {
                    if (!this.isDark) {
                        return "white";
                    } else {
                        //return "#33333390";
                        return "grey";
                    }
                } else {
                    return "white";
                }
            },
        },
        props: ["title"],
        data() {
            return {
                isDark: false
            };
        },
        methods: {
            toggleLeftNavBar() {
                let leftNavDrawer = !this.isLeftNavDrawer;
                this.$store.dispatch("AppState/setLeftNavDrawer", true);
            },
            tabletAndDown() {
                return this.$vuetify.breakpoint.name === "xs" ||
                    this.$vuetify.breakpoint.name === "sm";
            },
            navigate(path) {
                RouterService.goTo(path);
            },
            setTheme() {
                this.isDark = !this.isDark;
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
            }
        },
    };
</script>

<style lang="scss" scoped>
</style>
