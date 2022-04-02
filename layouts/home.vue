<template>
    <v-app id='app-home'>
        <!-- APP: CONTENT -->
        <v-main>
            <ContentHeader />
            <AppContent />
        </v-main>
        <!-- APP: FOOTER -->
        <AppFooter />
    </v-app>
</template>

<script>
import loader from '../mixins/loader'
import PageLoader from './components/PageLoader'
import AppContent from './components/AppContent'
import AppFooter from './components/AppFooter'
import ContentHeader from './components/ContentHeader'
import postRouteNavigation from '../mixins/postRouteNavigation'


export default {
    name: 'home',
    mixins: [loader, postRouteNavigation],
    scrollToTop: true,
    components: {
        PageLoader,
        AppContent,
        AppFooter,
        ContentHeader
    }
}
</script>

<style lang='scss' scoped>

</style>

