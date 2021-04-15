<template>
    <v-container fluid>
        <v-row justyfy="center" class="pt-3 pb-12">
            <v-col cols="12" md="6" class="py-1">
                <v-text-field
                              v-model="filters.query"
                              color="primary"
                              class="centered-input"
                              label="Search posts"
                              filled hide-details
                              autocomplete="off"
                              outlined clearable
                    prepend-inner-icon="search">
                </v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-1">
                <v-autocomplete v-model="filters.topics"
                                color="secondary"
                                class="centered-input"
                              label="Filter by topic"
                                :items="allBlogTopics"
                              elevation="0" hide-details
                              outlined filled multiple
                              prepend-inner-icon="mdi-pound">
                    <template v-slot:selection="{ item, index }">
                        <v-chip v-if="index <= 1" color="secondary" label>
                            <span>{{ item }}</span>
                        </v-chip>
                        <span
                            v-if="index > 1"
                            class="grey--text caption"
                        >
                          (+{{ filters.topics.length - 2 }} others)
                        </span>

                    </template>
                </v-autocomplete>
            </v-col>
        </v-row>
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
                require('@/assets/img/seo/blog.jpg'));
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
            return {
                filters: {
                    query: "",
                    topics: "",
                },
                blogArticles: [],
                allBlogTopics: [],
            };
        },
        computed: {
            ...mapGetters("DataState", {
                allBlogArticles: "getBlogArticles"
            }),
        },
        created() {
            this.filters.query = "";
            for (let article of this.allBlogArticles) {
                for (let tag of article.tags) {
                    this.allBlogTopics.push(tag)
                }
            }
            this.filters.topics = this.allBlogTopics;
        },
        methods: {
            tabletAndDown() {
                return this.$vuetify.breakpoint.name === "xs" ||
                    this.$vuetify.breakpoint.name === "sm";
            },
            async filterArticles(searchQuery, searchTopics) {
                return await this.$content('blog')
                    .search(searchQuery)
                    .sortBy("createdAt", "desc")
                    .where({ tags: { $containsAny: searchTopics } })
                    .fetch()
            }
        },
        watch: {
            filters: {
                deep: true,
                immediate: true,
                async handler(value) {
                    if (!value.query) {
                        value.query = "";
                    }
                    this.blogArticles = await this.filterArticles(value.query, value.topics);
                }
            },
        }
    };
</script>

<style scoped>
    .centered-input >>> input {
        margin-top: 3px!important;
    }
</style>
