<template>
    <v-container fluid>
        <v-row class="pb-12">
            <v-col
                    v-for="article in articles"
                    :key="article.slug"
                    class="pa-2"
                    cols="12"
                    sm="6"
                    md="4"
            >
                <Article
                        :article="article"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
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
            showAppFooter: true,
            showAppNavigationDrawer: true,
            showContentHeader: false,
        },
        components: {Article},
        props: {},
        async asyncData({ $content, params }) {
            const articles = await $content('articles')
                .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt', 'updatedAt'])
                .sortBy('createdAt', 'desc')
                .fetch()
            return {
                articles
            }
        },
        data() {
            return {};
        },
        methods: {
            tabletAndDown() {
                return this.$vuetify.breakpoint.name === "xs" ||
                    this.$vuetify.breakpoint.name === "sm";
            },
        }
    };
</script>
