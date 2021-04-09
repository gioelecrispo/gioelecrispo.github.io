<template>
    <v-container fluid>
        <v-row class="pb-12">
            <v-col
                    v-for="article in articles"
                    :key="article.id"
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
    import {mapGetters} from "vuex";
    import Article from "../../components/Article";
    import metadata from "../../mixins/metadata";

    export default {
        name: "ArticlesList",
        layout: 'AppStructure',
        meta: {
            showAppToolbar: true,
            showAppNavigationDrawer: true,
            showContentHeader: false,
        },
        components: {Article},
        mixins: [metadata],
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
            tabletAndDown() {
                return this.$vuetify.breakpoint.name === "xs" ||
                    this.$vuetify.breakpoint.name === "sm";
            },
        }
    };
</script>
