<template>
    <v-navigation-drawer
            :value="isLeftNavDrawer"
            :right="right"
            width="100%"
            app
    >
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <v-row justify="end" class="mr-3">
                        <v-btn icon @click="closeLeftNavBar()">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-list
                            class="pt-0 mt-12"
                            dense
                            rounded
                    >
                        <v-list-item-group v-model="model">
                            <v-list-item
                                    v-for="element in appNavDrawElements"
                                    :key="element.title"
                                    class="text-center"
                                    @click="navigate(element.path)"
                            >
                                <v-row>
                                    <v-col cols="12">
                                        <v-row justify="center">
                                            <v-icon class="mr-4">{{ element.icon }}</v-icon>
                                            {{ element.title }}
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
    </v-navigation-drawer>
</template>

<script>
    import LanguageChooser from "@/components/LanguageChooser";
    import {mapGetters, mapState,} from "vuex";
    import RouterService from "@/helpers/RouterService";

    export default {
        name: "NavigationDrawer",
        props: ["right"],
        computed: {
            ...mapState({}),
            ...mapGetters("AppState", {
                    isLeftNavDrawer: "isLeftNavDrawer",
                }
            ),
        },
        data() {
            return {
                model: 1,
                disableResizeWatcher: true,
                appNavDrawElements: [ // Application navigation drawer elements
                    {id: "home", title: "Home", icon: "mdi-home", path: "/me/home"},
                    {id: "cv", title: "Curriculum Vitae", icon: "mdi-timeline-text", path: "/me/cv"},
                    {id: "projects", title: "Projects", icon: "mdi-github-circle", path: "/me/projects"},
                    {id: "me", title: "About me", icon: "mdi-account", path: "/me/aboutme"},
                    {id: "contacts", title: "Contacts", icon: "mdi-at", path: "/me/contacts"}
                ],
                darkTheme: false
            };
        },
        methods: {
            closeLeftNavBar() {
                this.$store.dispatch("AppState/setLeftNavDrawer", false);
            },
            navigate(path) {
                this.$store.dispatch("AppState/setLeftNavDrawer", false);
                RouterService.goTo(path);
            },
        },
    };
</script>

<style lang="scss" scoped>
</style>

