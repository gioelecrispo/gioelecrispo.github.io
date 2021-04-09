<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col lg="10" xl="9">
                <v-card color="transparent" height="30" elevation="0" class="pa-0 py-2 mb-8">
                    <v-card-title class="px-0 py-0 secondary--text" v-if="article.tags">{{
                        article.tags.map(t => '#'+t).join(', ') }}
                    </v-card-title>
                    <v-card-text class="px-0 py-0 grey--text">Latest update: {{ formatDate(article.updatedAt) }}
                    </v-card-text>
                </v-card>
                <article class="pt-12">
                    <nuxt-content :document="article"/>
                </article>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Gioele Crispo - Article: ' + article.title,
                meta: [
                    { hid: 'og:image', property: 'og:image', content: article.img },
                    { hid: 'description', name: 'description', content: article.description }
                ]
            }
        },
        name: 'ArticleDetails',
        layout: 'AppStructure',
        components: {},
        props: ['articleId'],
        meta: {
            showAppToolbar: true,
            showAppNavigationDrawer: true,
            showContentHeader: false
        },
        async asyncData({ $content, params }) {
            // fetch our article here
            const article = await $content('articles', params.id).fetch()
            return { article }
        },
        data() {
            return {
                htmlSource: ''
            }
        },
        computed: {},
        created() {
            this.$store.dispatch('AppState/setAppToolbarImage', this.article.img)
        },
        methods: {
            formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('en', options)
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
