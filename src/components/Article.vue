<template>
  <v-card
    class="my-2 mr-6"
    max-width="350"
    height="500"
    elevation="8"
    @click="navigate(articleId)"
  >
    <v-img
      class="white--text align-end"
      height="180px"
      :src="article.img"
    />
    <v-card-title class="px-8 py-6">
      {{ article.title }}
    </v-card-title>

    <v-card-text class="px-8 pb-3 text--primary">
      {{ article.subTitle }}
    </v-card-text>

    <v-card-subtitle class="px-8 py-6">
      10/10/2020
    </v-card-subtitle>
  </v-card>
</template>

<script>
import RouterService from "../helpers/RouterService";

export default {
    name: "Article",
    components: {},
    props: ["articleId", "article"],
    data() {
        return {
        };
    },
    computed: {},
    methods: {
        navigate(articleId) {
            let path = {
                name: "ArticleDetails",
                params: {
                    articleId: articleId
                },
            };
            RouterService.goTo(path);
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
