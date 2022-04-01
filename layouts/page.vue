<template>
    <AbstractPage>
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
    </AbstractPage>
</template>

<script>
import { mapGetters } from 'vuex';
import AbstractPage from './components/AbstractPage'
import NavigationDrawer from './components/NavigationDrawer'
import AppContent from './components/AppContent'
import AppToolbar from './components/AppToolbar'
import AppFooter from './components/AppFooter'
import ContentHeader from './components/ContentHeader'
import ui from '../mixins/ui'
import postRouteNavigation from '../mixins/postRouteNavigation'


export default {
    name: 'page',
    mixins: [ui, postRouteNavigation],
    scrollToTop: true,
    components: {
        AbstractPage,
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

