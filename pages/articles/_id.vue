<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col lg="10" xl="9">
                <v-card color="transparent" height="30" elevation="0" class="pa-0 py-2 mb-8">
                  <v-card-title class="px-0 py-0 secondary--text" v-if="article.tags">{{
                      article.tags.map(t => '#'+t).join(', ') }}</v-card-title>
                  <v-card-text class="px-0 py-0 grey--text">Latest update: {{ formatDate(article.updatedAt) }}</v-card-text>
                </v-card>
                <article class="pt-12">
                    <nuxt-content :document="article" />
                </article>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        name: "ArticleDetails",
        layout: 'AppStructure',
        components: {},
        props: ["articleId"],
        meta: {
            showAppToolbar: true,
            showAppNavigationDrawer: true,
            showContentHeader: false,
        },

        async asyncData({ $content, params }) {
            // fetch our article here
            const article = await $content('articles', params.id).fetch()
            return { article }
        },
        metaInfo() {
            return {
                title: "Gioele Crispo",
                titleTemplate: "%s - " + article.title,
                htmlAttrs: {
                    lang: "en",
                    amp: true
                },
                meta: [
                    { name: "robots", content: "index,follow" },
                    { name: "description", content: article.subTitle },
                    { property: "og:title", content: "Gioele Crispo - " + article.title},
                    { property: "og:site_name", content: "Gioele Crispo" },
                    { property: "og:type", content: "website" },
                    { property: "og:url", content: "https://gioelecrispo.github.io" + this.$route.path},
                    { property: "og:image", content: article.img }
                ]
            }
        },
        data() {
            return {
                htmlSource: "",
            };
        },
        computed: {

        },
        created() {
            this.$store.dispatch("AppState/setAppToolbarImage", this.article.img);
        },
        methods: {
            formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('en', options)
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
