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
            <v-col  class="pa-2"
                    cols="12"
                    sm="6"
                    md="4"
                    v-if="!blogArticles || blogArticles.length === 0">
                <v-skeleton-loader
                    class="mb-6"
                    boilerplate="true"
                    elevation="2"
                    type="card-avatar, article"
                ></v-skeleton-loader>
            </v-col>
            <v-col v-else
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
    import createSeoMeta from '../../utils/seo';
    import ui from "../../mixins/ui";

    export default {
        name: "ArticlesList",
        layout: 'page',
        mixins: [ui],
        head() {
            return createSeoMeta('Blog',
                'Visit my blog section to discover all my post about machine learning and similar!',
                this.$route.path,
                require('@/assets/img/seo/blog.jpg'));
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
            };
        },
        async fetch() {
            this.blogArticles = await this.filterArticles("", this.allBlogTopics);
        },
        computed: {
            ...mapGetters("DataState", {
                allBlogArticles: "getBlogArticles",
                allBlogTopics: "getBlogTopics",
            }),
        },
        created() {
            this.$store.dispatch("AppState/setAppToolbarTitle", "Blog");
            this.filters.topics = this.allBlogTopics;
        },
        methods: {
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
                immediate: false,
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