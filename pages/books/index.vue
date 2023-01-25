<template>
    <v-container fluid>
        <v-container>
            <v-row class='pb-12'>
                <v-col style='align-items: center'
                       v-for='(book, bookId) in books'
                       :key='bookId'
                       class='pa-2'
                       cols='12'
                >
                    <NuxtLink :to="{ name: 'books-id', params: { id: book.id } }"
                              style='text-decoration: none; color: inherit;'>
                        <Book
                            :book='book'
                        />
                    </NuxtLink>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import Book from '../../components/Book'
import createSeoMeta from '../../utils/seo'
import ui from '../../mixins/ui'
import { mapGetters } from 'vuex'

export default {
    name: 'BookList',
    layout: 'page',
    mixins: [ui],
    head() {
        return createSeoMeta('Books',
            'Visit my books section to discover all my books!',
            this.$route.path,
            require('@/assets/img/seo/books.jpg'))
    },
    components: { Book },
    props: {},
    data() {
        return {

        }
    },
    created() {
        this.$store.dispatch('AppState/setAppToolbarTitle', 'Books');
    },
    mounted() {
        this.$router.push('/books/discover-chatgpt-by-asking-it');
    },
    computed: {
        ...mapGetters('DataState', {
            books: 'getBooks',
        })
    },

}
</script>

<style lang='scss' scoped>
.centered-input >>> input {
    margin-top: 3px !important;
}
</style>
