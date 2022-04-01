<template>
    <v-app-bar
        app
        elevate-on-scroll
        :short='false'
        :dense='false'
        :color='setToolbarColor()'
        :dark='image !== undefined'
        :src="image !== undefined ? image : ''"
        :fade-img-on-scroll='image !== undefined'
        :shrink-on-scroll='image !== undefined'
        :scroll-threshold="image !== undefined ? '450': ''"
        :height="image !== undefined ? '450': ''"
    >
        <template
            v-if='image !== undefined'
            v-slot:img='{ props }'
        >
            <v-img
                v-bind='props'
                :gradient='gradient'
            >
            </v-img>
        </template>
        <v-btn
            v-if='showNavigationDrawerIcon'
            icon
            @click.stop='toggleLeftNavBar(true)'
        >
            <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-toolbar-title
            v-if='tabletAndDown() || image !== undefined'
            class='pl-1 pr-3'
        >
            <h3>{{ title }}</h3>
        </v-toolbar-title>
        <v-spacer />
        <v-row align='center' justify='end'>
            <client-only>
                <v-menu
                    v-model='colorMenu'
                    :close-on-content-click='true'
                    offset-y
                >
                    <template v-slot:activator='{ on, attrs }'>
                        <v-btn icon color='sectionPrimary'
                               v-bind='attrs'
                               v-on='on'>
                            <v-avatar :size='28' :color="image ? 'white' : 'sectionPrimary'">
                                <v-avatar :size='22' color='primary'>
                                </v-avatar>
                            </v-avatar>
                        </v-btn>
                    </template>
                    <ThemeHandler :dark='false'></ThemeHandler>
                </v-menu>
            </client-only>

            <v-btn
                icon
                @click='setDarkTheme()'
            >
                <v-icon>{{ isDark ? 'mdi-white-balance-sunny' : 'far fa-moon' }}</v-icon>
            </v-btn>
            <v-btn
                v-for='element in appToolbarElements'
                v-if='!showNavigationDrawerIcon'
                :key='element.id'
                :class="$route.path === element.path ? 'active-button' : ''"
                :color="$route.path === element.path ? 'primary' : ''"
                text tile
                large
                nuxt
                :to='element.path'
                style='border-radius: 16px;'
            >
                <v-icon class='mr-1'>
                    {{ element.icon }}
                </v-icon>
                {{ element.title }}
            </v-btn>
        </v-row>
    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import ui from '../../mixins/ui'
import utils from '../../mixins/utils'
import ThemeHandler from '@/components/ThemeHandler'


export default {
    name: 'AppToolbar',
    components: { ThemeHandler },
    mixins: [ui, utils],
    props: ['title', 'image'],
    data() {
        return {
            colorMenu: false
        }
    },
    computed: {
        ...mapGetters('AppState', {
            isDark: 'isDark',
            isLeftNavDrawer: 'isLeftNavDrawer',
            appToolbarElements: 'getNavLinks'
        }),
        showNavigationDrawerIcon() {
            return this.tabletAndDown()
        },
        gradient() {
            let primaryColor = this.isDark ? this.$vuetify.theme.themes.dark.primary : this.$vuetify.theme.themes.light.primary
            let rgbColor = this.hexToRgb(primaryColor)
            return 'to top right, rgba(' + rgbColor + ',0.9), rgba(' + rgbColor + ',0.6)'
        }
    },
    methods: {
        toggleLeftNavBar(value) {
            this.$store.dispatch('AppState/setLeftNavDrawer', value)
        },
        setToolbarColor() {
            let color = 'sectionPrimary'
            if (this.image) {
                color = 'primary'
            }
            return color
        },
        setDarkTheme() {
            this.$store.dispatch('AppState/setIsDark', !this.isDark)
            this.$vuetify.theme.dark = this.isDark === true
        }
    }
}
</script>

<style lang='scss' scoped>

</style>
