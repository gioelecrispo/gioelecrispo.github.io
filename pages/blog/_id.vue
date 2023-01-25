<template>
    <v-container fluid>
        <v-container>
            <v-row justify='center' class='mt-8'>
                <v-col lg='10' xl='9'>
                    <v-card color='transparent' height='30' elevation='0' class='pa-0 py-2 mb-8'>
                        <v-card-title class='px-0 py-0 primary--text' v-if='article.tags'>{{
                                article.tags.map(t => '#' + t).join(', ') }}
                        </v-card-title>
                        <v-card-text class='px-0 py-0 grey--text'>Written on: {{ formatDate(article.createdAt) }}
                        </v-card-text>
                        <v-card-text class='px-0 py-0 grey--text'>Latest update: {{ formatDate(article.updatedAt) }}
                        </v-card-text>
                    </v-card>
                    <article class='pt-12'>
                        <nuxt-content :document='article' />
                    </article>
                </v-col>
            </v-row>
            <client-only placeholder='loading...' v-if='production'>
                <h2 class='mt-12 mb-2'>Comments</h2>
                <div id='disqus_thread'></div>
            </client-only>
        </v-container>
    </v-container>
</template>

<script>
import createSeoMeta from '../../utils/seo'

export default {
    head() {
        let title = this.article.title.replace(/<[^>]*>?/gm, '')  // strip HTML for compatibility
        let metadata = createSeoMeta(title,
            this.article.description,
            this.$route.path,
            `${process.env.HOST_BASE}${this.article.img}`);
        let tags = this.article.tags.toString();
        metadata.meta.push({ hid: "article:published_time", property: "article:published_time", content: this.article.createdAt });
        metadata.meta.push({ hid: "article:modified_time", property: "article:modified_time", content: this.article.updatedAt });
        metadata.meta.push({ hid: "article:tag", property: "article:tag", content: tags});
        metadata.meta.push({ hid: "twitter:label1", property:"twitter:label1", content: "Written by" });
        metadata.meta.push({ hid: "twitter:data1", property:"twitter:data1", content: this.article.author });
        metadata.meta.push({ hid: "twitter:label2", property:"twitter:label2", content: "Filed under"});
        metadata.meta.push({ hid: "twitter:data2", property: "twitter:data2", content: tags});
        return metadata;
    },
    name: 'ArticleDetails',
    layout: 'post',
    components: {},
    props: ['articleId'],
    async asyncData({ store, $content, params }) {
        // fetch our article here
        const article = await $content('blog', params.id).fetch()
        store.dispatch('AppState/setAppToolbarImage', article.img)
        return { article }
    },
    data() {
        return {
            production: process.env.NODE_ENV === 'production',
            article: undefined,
            htmlSource: ''
        }
    },
    mounted() {
        if (this.production) {
            this.createDisqusScript()
        }
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },
        createDisqusScript() {
            let path = this.$route.path
            var disqus_config = function() {
                this.page.url = document.baseURI  // Replace PAGE_URL with your page's canonical URL variable
                this.page.identifier = path.slice(-1) === '/' ? path.slice(0, -1) : path // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };

            (function() { // DON'T EDIT BELOW THIS LINE
                let d = document, s = d.createElement('script')
                s.src = 'https://gioelecrispo.disqus.com/embed.js'
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s)
            })()
        }
    },
    watch: {
        '$vuetify.theme.dark'(oldValue, newValue) {
            if (this.production) {
                window.DISQUS.reset({
                    reload: true
                })
            }
        },
        '$vuetify.theme.themes.dark.primary'(oldValue, newValue) {
            if (this.production) {
                window.DISQUS.reset({
                    reload: true
                })
            }
        }
    }
}
</script>

<style scoped lang='scss'>
</style>
