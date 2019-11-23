// Internationalization plugin
import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

import en from "@/plugins/locales/en";
import it from "@/plugins/locales/it";

const messages = {
    en,
    it,
};

// Create internationalization object
const i18n = new VueI18n({
    locale: "en", // set locale
    fallbackLocale: "en", // set fallback locale
    messages, // set locale messages
});

export default i18n;
