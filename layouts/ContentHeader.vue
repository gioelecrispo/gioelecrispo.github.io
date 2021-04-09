<template>
    <div class="parallax">
        <div class="bg bg-overlay "></div>
        <v-container fluid fill-height class="caption">
            <v-row align="center" justify="center">
                <v-col :cols="isUiLarger ? 'auto' : '12'" md="auto">
                    <UserIntro></UserIntro>
                </v-col>
                <v-col cols="auto">
                    <v-row v-for="(navLink, idx) in visibleNavLinks"
                           :key=idx class="pa-4" :class="getAnimationClass(idx)">
                        <v-btn dark block text @click="$router.push(navLink.path)">
                            {{ navLink.title }}
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <v-btn fab dark
               color="secondary"
               absolute
               bottom
               right
               @click="setTheme()">
            <v-icon>{{ isDark ? "mdi-white-balance-sunny" : "far fa-moon" }}</v-icon>
        </v-btn>
    </div>

</template>

<script>
    import UserIntro from "@/components/UserIntro";
    import {mapGetters} from "vuex";
    import ui from "../mixins/ui";

    export default {
        name: "ContentHeader",
        props: [],
        mixins: [ui],
        components: {UserIntro},
        data() {
            return {};
        },
        computed: {
            ...mapGetters("AppState", {
                isDark: "isDark",
                navLinks: "getNavLinks",
            }),
            visibleNavLinks() {
                if (this.navLinks) {
                    return this.navLinks.slice(1, this.navLinks.length);
                }
                return this.navLinks;
            }
        },
        methods: {
            setTheme() {
                this.$store.dispatch("AppState/setIsDark", !this.isDark);
                this.$vuetify.theme.dark = this.isDark === true;
            },
            getAnimationClass(idx) {
                let multiplier = 25;
                let baseTiming = 75;
                let finalTiming = idx * multiplier + baseTiming;
                return "slide-in-top-" + finalTiming;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .parallax {
        position: relative;
        height: 90vh;
    }

    .parallax .bg {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(
                        rgba(0, 0, 0, 0.85),
                        rgba(0, 0, 0, 0.5)
        ), url("../assets/img/img_parallax.jpg");
        background-attachment: fixed;
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

