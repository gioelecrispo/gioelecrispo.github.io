<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col lg="10" xl="9">
                <v-card color="transparent" height="30" elevation="0" class="pa-0 py-2 mb-8">
                  <v-card-title class="px-0 py-0 secondary--text">{{ article.tag }}</v-card-title>
                  <v-card-text class="px-0 py-0 grey--text">Latest update: {{ article.latestUpdate }}</v-card-text>
                </v-card>
                <div class="pt-12" v-html="htmlSource"/>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";

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
            ...mapGetters("DataState", {
                    articles: "getArticles",
                }
            ),
            article() {
                return this.articles.find(article => article.id === this.articleId);
            }
        },
        created() {
            this.$store.dispatch("AppState/setAppToolbarImage", this.article.img);
            /*let md = require("markdown-it")({
                html: true,
                linkify: true,
                typography: true
            }).use(require("markdown-it-imsize"));
            let mdSource = this.article.content;
            this.htmlSource = md.render(mdSource.default);
            document.dispatchEvent(new Event("render-event"));*/
        }
    };
</script>

<style scoped lang="scss">

</style>
