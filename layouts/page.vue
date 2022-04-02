<template>
    <v-app id='app-page'>
        <!-- APP: LEFT NAVIGATION DRAWER -->
        <NavigationDrawer
            v-if='tabletAndDown()'
            :right='false'
        />

        <!-- APP: TOP TOOLBAR -->
        <AppToolbar
            id='app-toolbar'
            :title='appToolbarTitle'
        />

        <!-- APP: CONTENT -->
        <v-main>
            <AppContent />
        </v-main>
        <!-- APP: FOOTER -->
        <AppFooter />
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import PageLoader from './components/PageLoader'
import NavigationDrawer from './components/NavigationDrawer'
import AppContent from './components/AppContent'
import AppToolbar from './components/AppToolbar'
import AppFooter from './components/AppFooter'
import ContentHeader from './components/ContentHeader'
import ui from '../mixins/ui'
import loader from '../mixins/loader'
import postRouteNavigation from '../mixins/postRouteNavigation'


export default {
    name: 'page',
    mixins: [ui, loader, postRouteNavigation],
    scrollToTop: true,
    components: {
        PageLoader,
        NavigationDrawer,
        AppToolbar,
        AppContent,
        AppFooter,
        ContentHeader
    },
    props: {},
    computed: {
        ...mapGetters('AppState', {
            appToolbarTitle: 'getAppToolbarTitle'
        })
    },
    data() {
        return {}
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

