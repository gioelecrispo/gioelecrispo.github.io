import colors from 'vuetify/es5/util/colors'


export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    ssr: false,
    generate: {
        fallback: true
    },
    // router
    router: {
        base: '/me/',
        middleware: ['routeMetaParser']
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: 'Gioele Crispo - %s',
        title: 'Home',
        htmlAttrs: {
            lang: 'en',
            amp: true
        },
        meta: [
            { charset: 'utf-8' },
            { name: "robots", content: "index,follow" },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Check out for Machine Learning blog and ideas!' },
            { hid: 'og:title', property: 'og:title', content: 'Gioele Crispo - Home' },
            { hid: 'og:image', property: 'og:image', content: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80" },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: "og:site_name", property: 'og:site_name', content: 'Gioele Crispo' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/youtube.js',
        //'~/plugins/vuetify.js'
    ],

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
        treeShake: true,
        customVariables: ['~/assets/variables.scss'],
        font: {
            family: 'Lato'
        },
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
