<template>
    <v-container fluid>
        <v-row class="pb-12">
            <v-col
                    v-for="article in blogArticles"
                    :key="article.slug"
                    class="pa-2"
                    cols="12"
                    sm="6"
                    md="4"
            >
                <NuxtLink :to="{ name: 'blog-id', params: { id: article.slug } }"
                          style="text-decoration: none; color: inherit;">
                    <Article
                            :article="article"
                    />
                </NuxtLink>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapGetters } from "vuex";
    import Article from "../../components/Article";
    import createSeoMeta from '../../utils/seo'

    export default {
        name: "ArticlesList",
        layout: 'AppStructure',
        head() {
            return createSeoMeta('Blog',
                'Visit my blog section to discover all my post about machine learning and similar!',
                this.$route.path,
                require('@/assets/img/seo/applications.jpg'));
        },
        meta: {
            appToolbarTitle: 'Articles',
            showAppToolbar: true,
            showAppToolbarImage: false,
            showAppFooter: true,
            showAppNavigationDrawer: true,
            showContentHeader: false,
        },
        components: {Article},
        props: {},
        data() {
            return {};
        },
        computed: {
            ...mapGetters("DataState", {
                blogArticles: "getBlogArticles"
            }),
        },
        methods: {
            tabletAndDown() {
                return this.$vuetify.breakpoint.name === "xs" ||
                    this.$vuetify.breakpoint.name === "sm";
            },
        }
    };
</script>
