<template>
    <AbstractPage>
        <v-app id='app-post'>
            <!-- APP: LEFT NAVIGATION DRAWER -->
            <NavigationDrawer
                v-if='tabletAndDown()'
                :right='false'
            />

            <!-- APP: TOP TOOLBAR -->
            <AppToolbar
                id='app-toolbar'
                title='Post'
                :image="require('@/assets/img/blog/' + appToolbarImage)"
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
import { mapGetters } from 'vuex'
import AbstractPage from './components/AbstractPage'
import NavigationDrawer from './components/NavigationDrawer'
import AppContent from './components/AppContent'
import AppToolbar from './components/AppToolbar'
import AppFooter from './components/AppFooter'
import ui from '../mixins/ui'
import postRouteNavigation from '../mixins/postRouteNavigation'

export default {
    name: 'post',
    mixins: [ui, postRouteNavigation],
    scrollToTop: true,
    components: {
        AbstractPage,
        NavigationDrawer,
        AppToolbar,
        AppContent,
        AppFooter,
    },
    props: {},
    computed: {
        ...mapGetters('AppState', {
            appToolbarImage: 'getAppToolbarImage'
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

