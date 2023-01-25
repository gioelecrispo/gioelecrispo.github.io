<template>
    <div>
        <!-- BODY -->
        <v-sheet dark elevation='0' class='primary book-showcase'>
            <v-container fluid>
                <v-row align='center'>
                    <v-col sm='6' md='5'>
                        <v-img :src="require('@/assets/img' + book.img)"  :class='!mobile() ? "book-img" : ""'></v-img>
                    </v-col>
                    <v-col sm='6' md='7' class='px-4 py-2'>
                        <v-container fluid>
                            <v-row class='px-0 pt-4 pb-2'>
                                <div style='word-break: break-word;' class='display-1'
                                     v-html='book.title'></div>
                            </v-row>
                            <v-row class='px-0 pt-1 pb-2'>
                                <span style='word-break: break-word;' class='overline'>{{ book.author }}</span>
                            </v-row>
                            <v-row class='px-0 py-4'>
                                <div style='word-break: break-word;' class='title'
                                     v-html='book.subtitle'></div>
                            </v-row>
                            <v-row class='px-0 pt-12 pb-2'>
                                <span style='word-break: break-word;' class='title'>PURCHASE NOW!</span>
                            </v-row>
                            <v-row class='px-0 pt-0 pb-0'>
                                <v-btn class="mr-2 my-2 book-purchase" :href="book.ebook.purchaseLink" light color='white'>Ebook</v-btn>
                                <v-btn class="mr-2 my-2 book-purchase" :href="book.paperback.purchaseLink" light color='white'>Paperback</v-btn>
                                <v-btn class="mr-2 my-2 book-purchase" :href="book.hardcover.purchaseLink" light color='white'>Hardcover</v-btn>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
        <v-sheet class='pt-4 pb-12 px-6'>
            <v-container class='py-8'>
                <v-row justify='center' class='py-4'>
                    <h1 class='display-2'><b>About the Author</b></h1>
                </v-row>
                <v-row align='center'>
                    <v-col cols="12" md='auto' class='px-4'>
                        <v-row align='center' justify='center'>
                        <v-avatar :tile='false'
                                  :size='168'
                                  style='outline: 6px solid gray;'
                        >
                            <img
                                :src="require('@/assets/img/me/me.jpg')"
                                alt='avatar'
                            >
                        </v-avatar>
                        </v-row>
                    </v-col>
                    <v-col>
                        <p class='px-6 py-2 title' style='line-height: 1.2;'
                           v-html='book.authorDescription'></p>
                    </v-col>
                </v-row>
            </v-container>
            <v-container class='py-8'>
                <v-row justify='center' class='py-4'>
                    <h1 class='display-2'><b>Book preview</b></h1>
                </v-row>
                <v-row>
                    <v-col sm="12" md='4'>
                        <v-row >
                            <v-col v-for='(p, idx) in book.preview' :key='idx'
                            class='pa-1'>
                                <v-img @click='expandImage(p)' :src='p'></v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col sm="12" md='8'>
                        <p class='px-4 py-2 title' style='line-height: 1.2;'
                           v-html='book.description'></p>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>

        <v-dialog
            v-model="imageDialog"
            width="600px"
        >
            <v-card>
                <v-container>
                    <v-row no-gutters align='center'>
                        <strong class='title'>Preview</strong>
                        <v-spacer></v-spacer>
                        <v-btn icon elevation='0'
                               @click='collapseImage()'>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-row>
                        <v-img :src='currentImage'></v-img>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import createSeoMeta from '../../utils/seo'
import ui from '~/mixins/ui'
import PersonalAvatar from '~/components/PersonalAvatar'

export default {
    head() {
        let title = this.book.title.replace(/<[^>]*>?/gm, ''); // strip HTML for compatibility
        let description = this.book.description.replace(/<[^>]*>?/gm, ''); // strip HTML for compatibility
        let metadata = createSeoMeta(title,
            description,
            this.$route.path,
            `${process.env.HOST_BASE}${this.book.img}`);// require('@/static' + this.book.img));
        let tags = this.book.tags.toString();
        metadata.meta.push({ hid: "article:published_time", property: "article:published_time", content: this.book.createdAt });
        metadata.meta.push({ hid: "article:tag", property: "article:tag", content: tags});
        metadata.meta.push({ hid: "twitter:label1", property:"twitter:label1", content: "Written by" });
        metadata.meta.push({ hid: "twitter:data1", property:"twitter:data1", content: this.book.author });
        metadata.meta.push({ hid: "twitter:label2", property:"twitter:label2", content: "Filed under"});
        metadata.meta.push({ hid: "twitter:data2", property: "twitter:data2", content: tags});
        return metadata
    },
    name: 'BookDetails',
    layout: 'book',
    components: { PersonalAvatar },
    mixins: [ui],
    props: ['bookId'],
    async asyncData({ store, $content, params }) {
        // fetch our book here
        const book = store.getters['DataState/getBooks'][params.id]
        return { book }
    },
    data() {
        return {
            imageDialog: false,
            currentImage: undefined,
        }
    },
    mounted() {
    },
    methods: {
        expandImage(image) {
            this.imageDialog = true;
            this.currentImage = image;
        },
        collapseImage() {
            this.imageDialog = false;
            this.currentImage = undefined;
        }
    }
}
</script>

<style scoped lang='scss'>
.book-img {
    margin-bottom: -100px;
}

.book-showcase {
    margin-bottom: 100px;
}

.book-purchase {
    padding: 25px!important;
    letter-spacing: 0.01em!important;
    font-weight: bold!important;
}
</style>