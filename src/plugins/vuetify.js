import Vue from "vue";
import Vuetify from "vuetify/lib";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css"; // md: Ensure you are using css-loader
import "@mdi/font/css/materialdesignicons.css"; // mdi: Ensure you are using css-loader
import "@fortawesome/fontawesome-free/css/all.css"; // fa5: Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: "#2196F3",
                secondary: "#424242",
                accent: "#82B1FF",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107",
                toolbars: "#FFFFFF"
            },
            dark: {
                primary: "#2196F3",
                secondary: "#e91e63",
                accent: "#673ab7",
                error: "#f44336",
                warning: "#ff9800",
                info: "#3f51b5",
                success: "#4caf50",
                toolbars: "#121212"
            }
        },
    },
    icons: {
        iconfont: "fa" | "md" | "mdi",
    },
});
