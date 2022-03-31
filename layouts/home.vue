<template>
    <AbstractPage>
        <v-app id='app-home'>
            <!-- APP: CONTENT -->
            <v-main>
                <ContentHeader />
                <AppContent />
            </v-main>
            <!-- APP: FOOTER -->
            <AppFooter />
        </v-app>
    </AbstractPage>
</template>

<script>
import AbstractPage from './components/AbstractPage'
import AppContent from './components/AppContent'
import AppFooter from './components/AppFooter'
import ContentHeader from './components/ContentHeader'
import postRouteNavigation from '../mixins/postRouteNavigation'


export default {
    name: 'AppStructure',
    mixins: [postRouteNavigation],
    scrollToTop: true,
    components: {
        AbstractPage,
        AppContent,
        AppFooter,
        ContentHeader,
    }
}
</script>

<style lang='scss' scoped>

</style>

