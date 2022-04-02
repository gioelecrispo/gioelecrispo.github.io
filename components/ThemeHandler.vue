<template>

    <v-card width='200'>
        <v-container fluid>
            <v-row align='center' justify='center'>
                <v-col cols='auto' v-if='dark'>
                    <v-btn
                        icon
                        @click='setDarkTheme()'
                    >
                        <v-icon>{{ isDark ? 'mdi-white-balance-sunny' : 'far fa-moon' }}</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols='auto'>
                    <v-sheet max-width='150px' color='transparent'>
                        <v-row align='center' justify='center'>
                            <v-col cols='auto' v-for='color in themeColors' :key='color' class='pa-2'>
                                <v-btn icon @click='setThemeColor(color)'>
                                    <v-avatar :size='24' :color='color'></v-avatar>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import ui from '../mixins/ui'


export default {
    name: 'ThemeHandler',
    components: {},
    props: {
        dark: {
            type: Boolean,
            default: true
        }
    },
    mixins: ['ui'],
    data() {
        return {
            colorMenu: false
        }
    },
    computed: {
        ...mapGetters('AppState', {
                isDark: 'isDark',
                themeColors: 'getThemeColors',
            }
        )
    },
    methods: {
        setDarkTheme() {
            this.$store.dispatch('AppState/setIsDark', !this.isDark)
            this.$vuetify.theme.dark = this.isDark === true
        },
        setThemeColor(color) {
            this.$store.dispatch('AppState/setSelectedThemeColor', color)
            this.$vuetify.theme.themes.light.primary = color
            this.$vuetify.theme.themes.dark.primary = color
        },
        setRandomColor() {
            let color = this.themeColors[Math.floor(Math.random() * this.themeColors.length)]
            this.setThemeColor(color)
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
