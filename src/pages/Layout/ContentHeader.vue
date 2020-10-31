<template>
    <div class="parallax">
        <div class="bg bg-overlay "></div>



            <div class="caption">
                <v-container>
                <v-row align="center" justify="center">
                    <v-col cols="12" md="auto">
                        <UserIntro></UserIntro>
                    </v-col>
                    <v-col cols="auto">
                        <v-row v-for="navLink in visibleNavLinks" class="pa-4">
                            <v-btn dark block text @click="navigate(navLink.path)">
                                {{ navLink.title }}
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
                </v-container>
            </div>
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
    import UserIntro from "../../components/UserIntro";
    import {mapGetters} from "vuex";
    import RouterService from "../../helpers/RouterService";

    export default {
        name: "ContentHeader",
        props: [],
        components: {UserIntro},
        data() {
            return {
                isDark: "false",
                elements: [
                    "curriculum vitae",
                    "works",
                    "articles"
                ]
            };
        },
        computed: {
            ...mapGetters("AppState", {
                navLinks: "getNavLinks",
            }),
            visibleNavLinks() {
                if (this.navLinks) {
                    return this.navLinks.slice(1, this.navLinks.length)
                }
                return this.navLinks;
            }
        },
        methods: {
            setTheme() {
                this.isDark = !this.isDark;
                this.$vuetify.theme.dark = this.isDark === true;
            },
            navigate(path) {
                RouterService.goTo(path);
            },
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
        ), url("../../assets/img/img_parallax.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        //opacity: .35;
        width: 100%;
        height: 100%;
    }

    .caption {
        position: absolute;
        left: 0;
        top: 32%;
        width: 100%;
        text-align: center;
        color: #000;
    }
</style>

