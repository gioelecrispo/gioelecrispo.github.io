<template>
    <v-container fluid>
        <v-row justify="center">
            <v-card
                    class="mx-auto"
                    max-width="500"
                    outlined
            >
                <div class="d-flex flex-no-wrap justify-space-between">
                    <v-list>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-row align="center" class="mb-4 pl-3">
                                    <v-icon small class="mr-3">mdi-github-circle</v-icon>
                                    <span class="overline">Github</span>
                                </v-row>
                                <v-list-item-title class="headline mb-1">{{ userInfo.login }}</v-list-item-title>
                                <v-list-item-subtitle>
                                    <span>{{ userInfo.location }}</span><span class="mx-2">|</span>
                                    <span class="overline">{{ userInfo.company }}</span>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-subtitle class="py-0">
                                    <v-row align="center" class="pl-3">
                                        <v-icon small class="mr-2">mdi-briefcase</v-icon>
                                        Projects: {{ userInfo.public_repos }}
                                    </v-row>
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="py-0">
                                    <v-row align="center" class="pl-3">
                                        <v-icon small class="mr-2">mdi-account-tie</v-icon>
                                        Followers: {{ userInfo.followers }}
                                    </v-row>
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="py-0">
                                    <v-row align="center" class="pl-3">
                                        <v-icon small class="mr-2">mdi-account-tie</v-icon>
                                        Following: {{ userInfo.following }}
                                    </v-row>
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="py-0">
                                    <v-row align="center" class="pl-3">
                                        <v-icon small class="mr-2">mdi-card-text-outline</v-icon>
                                        {{ userInfo.bio }}
                                    </v-row>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <v-row align="center" class="mx-3" color="transparent">
                        <v-avatar class="ma-3" size="125" tile>
                            <v-img :src="require('@/assets/img/me/me.png')"></v-img>
                        </v-avatar>
                    </v-row>
                </div>
            </v-card>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="6" md="4"
                           v-for="project in projects">
                        <v-card max-height="600px">
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" class="py-0">
                                            <v-row>
                                                <v-list>
                                                    <v-list-item three-line>
                                                        <v-list-item-content>
                                                            <v-list-item-title class="headline mb-1">{{ project.name }}
                                                            </v-list-item-title>
                                                            <v-list-item-subtitle >
                                                                <v-row align="center" class="pl-3">
                                                                    <span class="overline my-1"
                                                                          v-if="project.license">{{ project.license.name }}</span>
                                                                    <span class="mx-2" v-if="project.license">|</span>
                                                                    <span class="my-1 overline">Language</span>
                                                                    <v-avatar class="ml-3" size="20" tile v-if="project.language != null">
                                                                        <v-img :src="require('@/assets/img/skills/' +
                                                                    project.language.toLowerCase() + '.png')"></v-img>
                                                                    </v-avatar>
                                                                </v-row>

                                                            </v-list-item-subtitle>
                                                            <v-list-item-subtitle>
                                                                <span>{{ project.description }}</span>
                                                            </v-list-item-subtitle>

                                                            <v-list-item-subtitle class="mt-2" >
                                                                <a :href="project.html_url" target="_blank">Go to the project</a>
                                                            </v-list-item-subtitle>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list>
                                            </v-row>
                                            <v-row align="center" class="pl-3">
                                                <p class="my-1 suhbeader">Language</p>
                                                <v-avatar class="ml-3" size="25" tile v-if="project.language != null">
                                                    <v-img :src="require('@/assets/img/skills/' +
                                                     project.language.toLowerCase() + '.png')"></v-img>
                                                </v-avatar>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    const axios = require('axios');

    export default {
        name: 'Projects',
        components: {},
        props: {},
        computed: {},
        mounted() {
            this.getUserInfo();
            this.getUserProjects();
        },
        data() {
            return {
                userInfo: undefined,
                projects: undefined
            }
        },
        methods: {
            getUserInfo() {
                axios({
                    url: 'https://api.github.com/users/gioelecrispo',
                    method: 'get'
                })
                    .then(success => {
                        console.log("success", success.data)
                        this.userInfo = success.data;
                    });
            },
            getUserProjects() {
                axios({
                    url: 'https://api.github.com/users/gioelecrispo/repos',
                    method: 'get'
                })
                    .then(success => {
                        console.log("success", success.data)
                        this.projects = success.data;
                    });
            }
        }
    }
</script>
