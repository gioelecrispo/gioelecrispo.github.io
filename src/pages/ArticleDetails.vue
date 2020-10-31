<template>
  <v-container fluid>
    <h2>Ciao</h2>
    <div v-html="htmlSource" />
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "ArticleDetails",
    components: {},
    props: ["articleId"],
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
            return this.articles[this.articleId];
        }
    },
    created () {
        let md = require("markdown-it")();
        let mdSource = this.article.content;
        this.htmlSource = md.render(mdSource.default);
    }
};
</script>

<style scoped lang="scss">

</style>
