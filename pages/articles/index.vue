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
    import metadata from "../../mixins/metadata";

    export default {
        name: "ArticlesList",
        layout: 'AppStructure',
        meta: {
            appToolbarTitle: 'Articles',
            showAppToolbar: true,
            showAppNavigationDrawer: true,
            showContentHeader: false,
        },
        components: {Article},
        mixins: [metadata],
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
