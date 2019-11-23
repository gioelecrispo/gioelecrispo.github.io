<template>
    <v-footer dark padless height="auto">
        <v-card
                flat
                tile
                width="100%"
                class="blue darken-3 white--text text-center">
            <v-card-text class="pt-2 pb-1">
                <v-btn
                        v-for="socialMedia in socialMedias"
                        :key="socialMedia.href"
                        class="mx-3"
                        dark
                        icon
                >
                    <a :href="socialMedia.href" target="_blank">
                        <v-icon size="24px" color="white">{{ socialMedia.icon }}
                        </v-icon>
                    </a>
                </v-btn>
            </v-card-text>
            <v-card-text class="pt-1 pb-2">
                <blockquote class="subheader pa-0">
                    You can not discover new oceans if you do not have the courage to
                    lose sight of the shore.
                </blockquote>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="py-1">
                &copy; {{ new Date().getFullYear() }} — <strong>Gioele Crispo</strong>
                <v-btn class="mx-2" small icon dark @click="showInfoReference = true">
                    <v-icon size="20px">mdi-information-outline</v-icon>
                </v-btn>
            </v-card-text>
        </v-card>

        <v-dialog v-model="showInfoReference" max-width="300">
            <v-card>
                <v-card-text class="text-center py-2">
                    Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors
                    Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is
                    licensed by:
                    <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
                       target="_blank">CC 3.0 BY</a>
                </v-card-text>
            </v-card>

        </v-dialog>
    </v-footer>
</template>

<script>
    export default {
        name: "AppFooter",
        data() {
            return {
                showInfoReference: false,
                socialMedias: [
                    {
                        icon: "fab fa-facebook",
                        href: "https://www.facebook.com/gioelecrispo",
                    },
                    {
                        icon: "fab fa-linkedin",
                        href: "https://www.linkedin.com/in/gioele-crispo/",
                    },
                    {
                        icon: "fab fa-instagram",
                        href: "https://www.instagram.com/gioelecrispo",
                    }
                ]
            };
        }
    };

</script>

<style scoped>

</style>

