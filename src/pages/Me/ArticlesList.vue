<template>
  <v-container fluid>
    <v-row class="pt-6 pb-3">
      <h2>Articles</h2>
    </v-row>
    <v-row>
      <v-col
        v-for="(article, articleId) in articles"
        :key="articleId"
        class="pa-0"
        cols="12"
        sm="6"
        md="4"
      >
        <Article
          :article-id="articleId"
          :article="article"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";
import Article from "../../components/Article";

export default {
    name: "ArticlesList",
    components: {Article},
    props: {},

    computed: {
        ...mapGetters("DataState", {
            articles: "getArticles"
        }),
    },
    data() {
        return {};
    },
    methods: {

    }
};
</script>
