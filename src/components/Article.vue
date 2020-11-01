<template>

    <v-hover>
        <template v-slot:default="{ hover }">
            <v-card
                    class="flip-in-ver-right"
                    :max-width="hover ? 360 : 350"
                    :height="hover ? 510 : 500"
                    :elevation="hover ? 20 : 8"
                    :class="`${hover ? 'expand' : ''}`"
                    @click="navigate(articleId)"
            >
                <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="article.img"
                />
                <v-card-title class="px-8 py-6" v-html=" article.title">
                </v-card-title>

                <v-card-text class="px-8 pb-3 text--primary" v-html="article.subTitle">
                </v-card-text>

                <v-card-subtitle class="px-8 py-6">
                    {{ article.date }}
                </v-card-subtitle>
            </v-card>
        </template>
    </v-hover>


</template>

<script>
    import RouterService from "../helpers/RouterService";

    export default {
        name: "Article",
        components: {},
        props: ["articleId", "article"],
        data() {
            return {
                isActive: false
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
    .expand {
        margin: -5px;
    }
</style>
