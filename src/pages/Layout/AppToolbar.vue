<template>
    <v-app-bar app :color="appBarColor"
               :elevate-on-scroll="elevateOnScroll"
               :collapse="collapse"
               :short="short">
        <v-app-bar-nav-icon
                v-if="showNavigationDrawerIcon" @click.stop="toggleLeftNavBar()">
        </v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-x
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon :color="settingsColor">mdi-settings</v-icon>
                    </v-btn>
                </template>

                <v-card>
                    <v-list>
                        <v-list-item>
                            <v-list-item-action>
                                <v-switch v-model="goDark" v-on:change="setTheme"></v-switch>
                            </v-list-item-action>
                            <v-list-item-title>Enable Dark theme</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-row  justify="center">
                                <v-btn icon small class="mx-2" @click="changeLocale('en')">
                                        <v-avatar size="25px">
                                            <v-img  :src="require('@/assets/img/settings/flags/en.png')"></v-img>
                                        </v-avatar>

                                </v-btn>
                                <v-btn icon small class="mx-2" @click="changeLocale('it')">
                                    <v-avatar size="25px">
                                        <v-img  :src="require('@/assets/img/settings/flags/it.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                            </v-row>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>


            <v-btn v-if="!showNavigationDrawerIcon" text small
                   v-for="element in appToolbarElements"
                   @click="navigate(element.path)">
                <v-icon class="mr-1">{{ element.icon }}</v-icon>
                {{ element.title }}
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    import {mapGetters, mapState,} from "vuex";
    import RouterService from "@/helpers/RouterService";

    export default {
        name: "AppToolbar",
        components: {},
        computed: {
            ...mapState({}),
            ...mapGetters("AppState", {
                isLeftNavDrawer: "isLeftNavDrawer",
                isLeftTempNavDrawer: "isLeftTempNavDrawer",
            }),
            showNavigationDrawerIcon() {
                return this.$route.meta.showNavigationDrawer && this.tabletAndDown();
            },
            elevateOnScroll() {
                return !this.tabletAndDown();
            },
            collapse() {
                return this.tabletAndDown();
            },
            short() {
                return this.tabletAndDown();
            },
            settingsColor() {
                if (!this.goDark){
                    return "black"
                }
            },
            appBarColor() {
                if (this.tabletAndDown()) {
                    if (!this.goDark) {
                        return "#FFFFFF90";
                    } else {
                        return "#33333390";
                    }
                } else {
                    return ""
                }
            },
        },
        props: [],
        data() {
            return {
                goDark: false,
                fav: true,
                menu: false,
                message: false,
                hints: true,
                appToolbarElements: [ // Application navigation drawer elements
                    {id: "home", title: "Home", icon: "mdi-home", path: "/me/home"},
                    {id: "cv", title: "Curriculum Vitae", icon: "mdi-timeline-text", path: "/me/cv"},
                    {id: "projects", title: "Projects", icon: "mdi-github-circle", path: "/me/projects"},
                    {id: "me", title: "About me", icon: "mdi-account", path: "/me/aboutme"},
                    {id: "contacts", title: "Contacts", icon: "mdi-at", path: "/me/contacts"}
                ],
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
                this.$vuetify.theme.dark = this.goDark === true;
            },
            changeLocale(locale) {
                this.$i18n.locale = locale
            }

        },
    };
</script>

<style lang="scss" scoped>
    /*.v-toolbar.v-toolbar--collapsed {*/
    /*    max-width: 82px;*/
    /*}*/
</style>
