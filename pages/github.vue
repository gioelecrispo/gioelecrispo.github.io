<template>
    <v-container fluid>


        <v-row justify="center" class="scale-in-center">
            <v-card
                class="mx-auto"
                max-width="500"
                outlined
                shaped
            >
                <div v-if="githubUserInfo" class="d-flex flex-no-wrap justify-space-between">
                    <v-list color="transparent">
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-row
                                    align="center"
                                    class="mb-2 pl-3"
                                >
                                    <v-icon
                                        class="mr-3"
                                    >
                                        mdi-github
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
                            <v-img :src="require('@/assets/img/me/me.jpg')"/>
                        </v-avatar>
                    </v-row>
                </div>
                <div v-else class="d-flex flex-no-wrap justify-space-between">
                    <v-skeleton-loader style="width: 100%;"
                                       class="pa-2"
                                       boilerplate
                                       type="article, actions"
                    >
                    </v-skeleton-loader>
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
                            <v-img :lazy-src="require('@/assets/img/me/me.jpg')">
                                <template v-slot:placeholder>
                                    <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-progress-circular
                                            indeterminate
                                            color="grey lighten-5"
                                        ></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
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
                        v-for="project in githubProjects"
                        :key="project.id"
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <GithubProject :project="project"/>
                    </v-col>
                </v-row>
                <v-row v-if="!githubProjects"
                    align="center"
                >
                    <v-col v-for="n in 10" :key="n" cols="12"
                           sm="6"
                           md="6">
                       <GithubProject/>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex';
    import GithubProject from '@/components/GithubProject';
    import ui from '../mixins/ui';
    import createSeoMeta from '../utils/seo';
    import { getGithubUserInfo, getGithubProjects} from "../utils/api";

    export default {
        name: 'Projects',
        layout: 'page',
        components: { GithubProject },
        props: {},
        mixins: [ui],
        data() {
            return {
                githubUserInfo: undefined,
                githubProjects: undefined,
            }
        },
        async fetch () {
            getGithubUserInfo(this.$axios).then(succ => this.githubUserInfo = succ);
            getGithubProjects(this.$axios).then(succ => this.githubProjects = succ);
        },
        head() {
            return createSeoMeta('Github Projects',
                'A complete collection of my Github projects.',
                this.$route.path,
                'https://unsplash.com/photos/842ofHC6MaI')
        },
        created() {
            this.$store.dispatch('AppState/setAppToolbarTitle', 'Github');
            this.$fetch();
        },
        /*computed: {
            ...mapGetters('DataState', {
                githubUserInfo: 'getGithubUserInfo',
                githubProjects: 'getGithubProjects',
            })
        },*/
        methods: {}
    }
</script>
