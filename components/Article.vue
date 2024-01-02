<template>
    <v-hover>
        <template v-slot:default='{ hover }'>
            <v-card
                class='flip-in-ver-right'
                :height='hover ? 510 : 500'
                :elevation='hover ? 20 : 8'
                :class="`${hover ? 'expand' : ''}`"
                nuxt :to='`/blog/${article.slug}`'
            >
                <v-container fluid class='pt-0'>
                    <v-row class='pb-2'>
                        <v-col cols='12' class='pa-0'>
                            <v-img
                                class='white--text'
                                height='200px'
                                :src='img'
                            />
                        </v-col>
                    </v-row>
                    <v-row class='pb-0'>
                        <v-card-subtitle class='pl-4 pr-0 py-0 primary--text' v-if='article.tags'>{{
                                article.tags.map(t => '#' + t).join(', ') }}
                        </v-card-subtitle>
                    </v-row>
                    <v-row class='pb-2'>
                        <v-col cols='auto' class='pa-0'>
                            <v-card-subtitle class='px-4 py-0'>{{ formatDate(article.updatedAt) }}</v-card-subtitle>
                        </v-col>
                    </v-row>
                    <v-row class='px-2 py-2'>
                        <v-card-title style='word-break: break-word;' class='px-4 py-2 title'
                                      v-html='article.title'></v-card-title>
                    </v-row>
                    <v-row class='px-2 py-2'>
                        <v-card-text class='px-4 py-2' style='line-height: 1.2;'
                                     v-html='article.description'></v-card-text>
                    </v-row>
                </v-container>
            </v-card>
        </template>
    </v-hover>


</template>

<script>
export default {
    name: 'Article',
    components: {},
    props: ['article'],
    data() {
        return {}
    },
    computed: {
        img() {
            //return require(`@/assets/img/blog/${this.article.img}`)
            return this.article.img;
        }
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        }

    }
}
</script>

<style lang='scss' scoped>
.expand {
    margin: -5px;
    transition: 0.3s all ease-in-out;
    transform: scale(1.0);
}
</style>
