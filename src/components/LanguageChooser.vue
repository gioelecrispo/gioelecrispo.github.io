<template>
    <v-row class="pa-0">
        <v-col cols="4" v-for="language in languages" :key="languages.locale" @click="setLocale(language)">
            <div class="white--text">{{ language.locale }}</div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "LanguageChooser",
    data() {
        return {
            languages: [
                {
                    name: "English",
                    locale: "en",
                    //image: require("@/assets/img/languages/en.png"),
                },
                {
                    name: "Italiano",
                    locale: "it",
                    //image: require("@/assets/img/languages/it.png"),
                },
                {
                    name: "Espanol",
                    locale: "es",
                    //image: require("@/assets/img/languages/es.png"),
                },

            ]
        };
    },
    methods: {
        setLocale(language) {
            this.$i18n.locale = language.locale;
        }
    }
};
</script>

<style lang="scss" scoped>

</style>