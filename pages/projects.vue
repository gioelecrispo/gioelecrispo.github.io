<template>
    <v-container fluid>
        <v-row justify="center" class="scale-in-center">
            <v-card
                    v-if="githubUserInfo"
                    class="mx-auto"
                    max-width="500"
                    outlined
                    shaped
            >
                <div class="d-flex flex-no-wrap justify-space-between">
                    <v-list color="transparent">
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-row
                                        align="center"
                                        class="mb-2 pl-3"
                                >
                                    <v-icon
                                            small
                                            class="mr-3"
                                    >
                                        mdi-github-circle
                                    </v-icon>
                                    <span class="overline">Github</span>
                                </v-row>
                                <h2 class="mb-1">
                                    {{ githubUserInfo.login }}
                                </h2>
                                <v-list-item-subtitle>
                                    <v-container class="py-1">
                                        <v-row align="center">
                                            <span>{{ githubUserInfo.location }}</span>
                                            <span v-if="!mobile()" class="mx-2">|</span>
                                            <span class="overline mt-1">
                                                {{ githubUserInfo.company }}
                                            </span>
                                        </v-row>
                                    </v-container>


                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-subtitle class="py-0">
                                    <v-row
                                            align="center"
                                            class="pl-3"
                                    >
                                        <v-icon
                                                small
                                                class="mr-2"
                                        >
                                            mdi-briefcase
                                        </v-icon>
                                        Projects: {{ githubUserInfo.public_repos }}
                                    </v-row>
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="py-0">
                                    <v-row
                                            align="center"
                                            class="pl-3"
                                    >
                                        <v-icon
                                                small
                                                class="mr-2"
                                        >
                                            mdi-account-tie
                                        </v-icon>
                                        Followers: {{ githubUserInfo.followers }}
                                    </v-row>
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="py-0">
                                    <v-row
                                            align="center"
                                            class="pl-3"
                                    >
                                        <v-icon
                                                small
                                                class="mr-2"
                                        >
                                            mdi-account-tie
                                        </v-icon>
                                        Following: {{ githubUserInfo.following }}
                                    </v-row>
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="py-0">
                                    <v-row
                                            align="center"
                                            class="pl-3"
                                    >
                                        <v-icon
                                                small
                                                class="mr-2"
                                        >
                                            mdi-card-text-outline
                                        </v-icon>
                                        {{ githubUserInfo.bio }}
                                    </v-row>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <v-row
                            align="center"
                            class="mx-3"
                            color="transparent"
                    >
                        <v-avatar
                                class="ma-3"
                                size="125"
                                tile
                        >
                            <v-img :src="require('@/assets/img/me/me.png')"/>
                        </v-avatar>
                    </v-row>
                </div>
            </v-card>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row
                        align="center"
                >
                    <v-col
                            v-for="project in projects"
                            :key="project.id"
                            cols="12"
                            sm="6"
                            md="6"
                    >
                        <Project :project="project"/>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import Project from "@/components/Project";
    import ui from "../mixins/ui";

    const axios = require("axios");

    export default {
        name: "Projects",
        layout: 'AppStructure',
        head() {
            return {
                title: 'Github Projects',
                meta: [
                    { hid: 'og:title', property: "og:title", content: "Github Projects"},
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: "A complete collection of my Github projects."
                    },
                    { hid: 'og:url', property: "og:url", content: "https://gioelecrispo.github.io/me/" + this.$route.path},
                ],
            }
        },
        meta: {
            appToolbarTitle: 'Projects',
            showAppToolbar: true,
            showAppFooter: true,
            showAppNavigationDrawer: true,
            showContentHeader: false,
        },
        components: {Project},
        props: {},
        mixins: [ui],
        data() {
            return {};
        },
        computed: {
            ...mapGetters("DataState", {
                githubUserInfo: "getGithubUserInfo",
                projects: "getProjects"
            }),
        },
        methods: {}
    };
</script>
