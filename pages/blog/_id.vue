<template>
    <v-container fluid>

        <v-row justify='center' class='mt-8'>
            <v-col lg='10' xl='9'>
                <client-only>
                    <DisqusCount :identifier="article.slug"></DisqusCount>
                </client-only>
                <v-card color='transparent' height='30' elevation='0' class='pa-0 py-2 mb-8'>
                    <v-card-title class='px-0 py-0 secondary--text' v-if='article.tags'>{{
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
        <client-only placeholder="loading..." v-if='article'>
        <h2 class='mt-12 mb-2'>Comments</h2>
        <div id='disqus_thread'></div>
        </client-only>
        <!--<script>
            /**
             *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
             *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */

            /*let disqus_config = function () {
                this.page.url = "https://gioelecrispo.github.io";  // Replace PAGE_URL with your page's canonical URL variable
                this.page.identifier = article.slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };

            (function() { // DON'T EDIT BELOW THIS LINE
                let d = document, s = d.createElement('script')
                s.src = 'https://gioelecrispo.disqus.com/embed.js'
                s.setAttribute('data-timestamp', + new Date());
                (d.head || d.body).appendChild(s)
            })()
        </script>
        <script id='dsq-count-scr' src='//gioelecrispo.disqus.com/count.js' async></script>
        <noscript>Please enable JavaScript to view the <a href='https://disqus.com/?ref_noscript'>comments powered by
            Disqus.</a></noscript>-->

        <!--<client-only placeholder="loading..." v-if='article'>
            <h2 class='mt-12'>Comments</h2>
            <div class="comments">
                <Disqus ref="disqus" :pageConfig='pageConfig(article)' />
            </div>
        </client-only>-->
    </v-container>
</template>

<script>
import createSeoMeta from '../../utils/seo';

export default {
    head() {
        let title = this.article.title.replace(/<[^>]*>?/gm, '')  // strip HTML for compatibility
        return createSeoMeta(title,
            this.article.description,
            this.$route.path,
            require('@/assets/img/blog/' + this.article.img))
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
            article: undefined,
            htmlSource: '',
        }
    },
    computed: {

    },
    created() {
    },
    mounted() {
        this.createDisqusScript()
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },
        pageConfig(article) {
            console.log("page.url", document.baseURI)
            console.log("page.identifier", this.$route.path, location.pathname)
            console.log(article.slug, this.$route.path)
            return {
                title: article.slug,
                //identifier: this.$route.path,
                category_id: 'tech'
            }
        },
        createDisqusScript() {
            console.log("page.url", document.baseURI, document.b)
            console.log("page.identifier", this.$route.path, location.pathname)
            let _this = this;
            let disqus_config = function () {
                this.page.url = document.baseURI;  // Replace PAGE_URL with your page's canonical URL variable
                this.page.identifier = _this.$route.path; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };

            (function() { // DON'T EDIT BELOW THIS LINE
                let d = document, s = d.createElement('script')
                s.src = 'https://gioelecrispo.disqus.com/embed.js'
                s.setAttribute('data-timestamp', + new Date());
                (d.head || d.body).appendChild(s)
            })()
        }
    }
}
</script>

<style scoped lang='scss'>

</style>
