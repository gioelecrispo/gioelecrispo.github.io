<template>
    <v-container fluid>
        <v-row class="pb-12">
            <v-col
                    v-for="article in blogArticles"
                    :key="article.slug"
                    class="pa-2"
                    cols="12"
                    sm="6"
                    md="4"
            >
                <NuxtLink :to="{ name: 'blog-id', params: { id: article.slug } }"
                          style="text-decoration: none; color: inherit;">

                    <Article
                            :article="article"
                    />
                </NuxtLink>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapGetters } from "vuex";
    import Article from "../../components/Article";

    export default {
        name: "ArticlesList",
        layout: 'AppStructure',
        head() {
            return {
                title: 'Articles',
                meta: [
                    { hid: 'og:title', property: "og:title", content: "Articles"},
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: "Visit my blog section to discover all my post about machine learning and similar!"
                    },
                    { hid: 'og:url', property: "og:url", content: "https://gioelecrispo.github.io/me/" + this.$route.path},
                ],
            }
        },
        meta: {
            appToolbarTitle: 'Articles',
            showAppToolbar: true,
            showAppToolbarImage: false,
            showAppFooter: true,
            showAppNavigationDrawer: true,
            showContentHeader: false,
        },
        components: {Article},
        props: {},
        data() {
            return {};
        },
        computed: {
            ...mapGetters("DataState", {
                blogArticles: "getBlogArticles"
            }),
        },
        methods: {
            tabletAndDown() {
                return this.$vuetify.breakpoint.name === "xs" ||
                    this.$vuetify.breakpoint.name === "sm";
            },
        }
    };
</script>
