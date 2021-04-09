import colors from 'vuetify/es5/util/colors'
// import "roboto-fontface/css/roboto/roboto-fontface.css";
// import "material-design-icons-iconfont/dist/material-design-icons.css"; // md: Ensure you are using css-loader
// import "@mdi/font/css/materialdesignicons.css"; // mdi: Ensure you are using css-loader
// import "@fortawesome/fontawesome-free/css/all.css";

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    // router
    router: {
        base: '/me/',
        middleware: ['routeMetaParser']
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - me2',
        title: 'me2',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: "#2196F3",
                    secondary: "#e91e63",
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
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
