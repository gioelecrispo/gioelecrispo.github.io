<template>
    <div class='parallax'>
        <div class='bg bg-overlay'></div>
        <v-container fluid fill-height class='caption'>
            <v-row align='center' justify='center'>
                <v-col :cols="isUiLarger ? 'auto' : '12'" md='auto'>
                    <UserIntro></UserIntro>
                </v-col>
                <v-col cols='auto'>
                    <v-row v-for='(navLink, idx) in visibleNavLinks' class='px-4 py-2'
                           :key=idx :class='getAnimationClass(idx)'>
                        <v-btn dark block text nuxt outlined rounded
                               style='border-width: 3px; padding-left: 40px; padding-right: 40px;'
                               :to='navLink.path'>
                            {{ navLink.title }}
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <client-only>
            <v-menu
                v-model='colorMenu'
                :close-on-content-click='true'
                offset-x left
            >
                <template v-slot:activator='{ on, attrs }'>
                    <v-btn fab dark
                           v-bind='attrs'
                           v-on='on'
                           color='primary'
                           absolute
                           bottom
                           right>
                        <v-icon>{{ isDark ? 'mdi-white-balance-sunny' : 'far fa-moon' }}</v-icon>
                    </v-btn>
                </template>
                <ThemeHandler :dark='true'></ThemeHandler>
            </v-menu>
        </client-only>
    </div>

</template>

<script>
import UserIntro from '@/components/UserIntro'
import { mapGetters } from 'vuex'
import ui from '../../mixins/ui'
import ThemeHandler from '@/components/ThemeHandler'

export default {
    name: 'ContentHeader',
    props: [],
    mixins: [ui],
    components: { ThemeHandler, UserIntro },
    data() {
        return {
            colorMenu: false
        }
    },
    computed: {
        ...mapGetters('AppState', {
            isDark: 'isDark',
            navLinks: 'getNavLinks'
        }),
        visibleNavLinks() {
            if (this.navLinks) {
                return this.navLinks.slice(1, this.navLinks.length)
            }
            return this.navLinks
        }
    },
    methods: {
        getAnimationClass(idx) {
            let multiplier = 25
            let baseTiming = 75
            let finalTiming = idx * multiplier + baseTiming
            return 'slide-in-top-' + finalTiming
        }
    }
}
</script>

<style lang='scss' scoped>
.parallax {
    position: relative;
    height: 90vh;
}

.bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
            rgba(0, 0, 0, 0.90),
            rgba(0, 0, 0, 0.90)
    ), url("../../assets/img/img_parallax.jpg");
    //background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.caption {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
}

</style>

