<template>
    <v-app id='app-book'>
        <!-- APP: LEFT NAVIGATION DRAWER -->
        <NavigationDrawer
            v-if='tabletAndDown()'
            :right='false'
        />

        <!-- BOOK: TOP TOOLBAR -->

        <!-- BOOK: CONTENT -->
        <v-main>
            <AppContent />
        </v-main>
        <!-- BOOK: FOOTER -->
        <v-footer
            padless
            dark large
            height='auto'
            class='py-4'
        >
            <v-container>
                <v-row
                    justify='center'
                    no-gutters
                >
                    <v-btn
                        v-for='(link, idx) in links'
                        :key='idx'
                        color='white'
                        text
                        rounded
                        class='ma-2'
                        :href='link.href'
                    >
                        {{ link.name }}
                    </v-btn>
                </v-row>
                <v-row
                    justify='center'
                    no-gutters
                >
                    <v-card-title class='white--text text-center'>
                        <strong class='subheading px-4'>Get connected with me on social networks!</strong>
                        <v-btn
                            v-for='socialMedia in socialMedias'
                            :key='socialMedia.name'
                            class='mx-2'
                            dark
                            icon
                            :href='socialMedia.href'
                        >
                            <v-icon size='24px'>
                                {{ socialMedia.icon }}
                            </v-icon>
                        </v-btn>
                    </v-card-title>
                </v-row>
                <v-row
                    justify='center'
                    no-gutters
                >
                    <v-card-text class='py-4 white--text text-center'>
                        {{ new Date().getFullYear() }} — <strong>Gioele Crispo</strong>
                    </v-card-text>
                </v-row>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import PageLoader from './components/PageLoader'
import NavigationDrawer from './components/NavigationDrawer'
import AppContent from './components/AppContent'
import AppToolbar from './components/AppToolbar'
import AppFooter from './components/AppFooter'
import ui from '../mixins/ui'
import loader from '../mixins/loader'
import postRouteNavigation from '../mixins/postRouteNavigation'

export default {
    name: 'book',
    mixins: [ui, loader, postRouteNavigation],
    scrollToTop: true,
    components: {
        PageLoader,
        NavigationDrawer,
        AppToolbar,
        AppContent,
        AppFooter
    },
    props: {},
    computed: {
        ...mapGetters('AppState', {
            appToolbarImage: 'getAppToolbarImage'
        })
    },
    data() {
        return {
            socialMedias: [
                {
                    name: 'Github',
                    icon: 'mdi-github',
                    href: 'https://github.com/gioelecrispo'
                },
                {
                    name: 'LinkedIn',
                    icon: 'mdi-linkedin',
                    href: 'https://www.linkedin.com/in/gioele-crispo/'
                },
                {
                    name: 'Facebook',
                    icon: 'mdi-facebook',
                    href: 'https://www.facebook.com/gioelecrispo'
                },
                {
                    name: 'Instagram',
                    icon: 'mdi-instagram',
                    href: 'https://www.instagram.com/gioelecrispo'
                },
                {
                    name: 'YouTube',
                    icon: 'mdi-youtube',
                    href: 'https://www.youtube.com/channel/UCX38YLmygw3cfwljiNlBBQw'
                }
            ],
            links: [
                {
                    name: 'Author',
                    href: '/'
                },
                {
                    name: 'Blog',
                    href: '/blog'
                },
                {
                    name: 'Projects',
                    href: '/projects'
                }
            ]
        }
    },
    watch: {
        $route() {
            window.scrollTo(0, 0)
        }
    }
}
</script>

<style lang='scss' scoped>
</style>

