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
                <v-container fluid>
                    <v-row class="px-2 py-1">
                        <v-col cols="auto" class="pa-0">
                            <v-card-subtitle class="pl-4 pr-0 py-0 secondary--text">{{ article.tag }}</v-card-subtitle>
                        </v-col>
                        <v-col class="pa-0"></v-col>
                        <v-col cols="auto" class="pa-0">
                            <v-card-subtitle class="px-4 py-0">{{ article.date }}</v-card-subtitle>
                        </v-col>
                    </v-row>
                    <v-row class="px-2 py-2">
                        <v-card-title class="px-4 py-2" v-html=" article.title"></v-card-title>
                    </v-row>
                    <v-row class="px-2 py-2">
                        <v-card-text class="px-4 py-2" v-html="article.subTitle"></v-card-text>
                    </v-row>
                </v-container>


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
