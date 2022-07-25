import { fetchSitemapRoutes } from './utils/sitemap';


export default async () => {
    return {
        // ** ENVIRONMENT **
        env: {
            HOST_BASE:
                process.env.NODE_ENV === 'production'
                    ? 'https://gioelecrispo.github.io'
                    : 'http://localhost:3000/'
        },

        // ** BUILDING OPTIONS **
        // Target: https://go.nuxtjs.dev/config-target
        target: 'static',
        ssr: true,
        generate: {
            fallback: false,
            crawler: true
        },

        // This option lets you customize the loading component that Nuxt.js uses by default.
        loading: { },

        // ** ROUTER **
        router: {
            base: '/',
            middleware: [],
        },

        // ** HEADER and SEO **
        // Global page headers: https://go.nuxtjs.dev/config-head
        head: {
            titleTemplate: '%s - Gioele Crispo',
            title: 'Home',
            htmlAttrs: {
                lang: 'en',
                amp: true
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'robots', content: 'index,follow' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:site_name', property: 'og:site_name', content: 'Gioele Crispo' }
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
            ]
        },

        // Global CSS: https://go.nuxtjs.dev/config-css
        css: [
            "~/assets/styles/commons",
            'material-design-icons-iconfont/dist/material-design-icons.css', // md:
            '@mdi/font/css/materialdesignicons.css', // mdi
            '@fortawesome/fontawesome-free/css/all.css' // fa5
        ],

        // Auto import components: https://go.nuxtjs.dev/config-components
        components: false,

        // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
        plugins: [
            { src: '~/plugins/youtube.js'},
            { src: '~/plugins/vuex-persist', ssr: false }
        ],

        // ** MODULES **
        // Modules: https://go.nuxtjs.dev/config-modules
        modules: [
            // https://www.npmjs.com/package/nuxt-webfontloader
            //'nuxt-webfontloader',
            // https://go.nuxtjs.dev/axios
            '@nuxtjs/axios',
            // https://go.nuxtjs.dev/content
            '@nuxt/content',
            //
            '@nuxtjs/robots',
            // https://sitemap.nuxtjs.org/ - ** It has to be the last
            '@nuxtjs/sitemap'
        ],

        // Nuxt webfont module configuration: https://www.npmjs.com/package/nuxt-webfontloader#setup
        /*webfontloader: {
            google: {
                families: ['Lato&display=swap']  // Loads Lato
            }
        },*/

        // Axios module configuration: https://go.nuxtjs.dev/config-axios
        axios: {},

        // Content module configuration: https://go.nuxtjs.dev/config-content
        content: {},

        // Robots module configuration: https://github.com/nuxt-community/robots-module
        robots: {
            Host: 'https://gioelecrispo.github.io',
            UserAgent: '*',
            Sitemap: `https://gioelecrispo.github.io/sitemap.xml`,
        },

        // Sitemap module configuration: https://sitemap.nuxtjs.org/guide/configuration
        sitemap: {
            hostname: 'https://gioelecrispo.github.io',
            routes() {
                return fetchSitemapRoutes();  // all the dynamic routes
            }
        },

        // ** BUILD MODULES **
        // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
        buildModules: [
            // https://go.nuxtjs.dev/vuetify
            '@nuxtjs/vuetify',
            // https://github.com/juliomrqz/nuxt-optimized-images
            '@aceforth/nuxt-optimized-images',
        ],

        // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
        vuetify: {
            treeShake: true,
            customVariables: ['~/assets/variables.scss'],
            theme: {
                dark: false,
                options: {
                    customProperties: true,
                },
                themes: {
                    light: {
                        primary: '#2196F3',
                        secondary: '#E91E63',
                        accent: '#FFB510',
                        error: '#FF5252',
                        info: '#2196F3',
                        success: '#4CAF50',
                        warning: '#FFC107',
                        sectionPrimary: '#FFFFFF',
                        sectionSecondary: '#EFEFEF'
                    },
                    dark: {
                        primary: '#2196F3',
                        secondary: '#E91E63',
                        accent: '#FFB510',
                        error: '#f44336',
                        warning: '#ff9800',
                        info: '#3f51b5',
                        success: '#4caf50',
                        sectionPrimary: '#121212',
                        sectionSecondary: '#1A1A1A'
                    }
                }
            },
            defaultAssets: false,
        },

        optimizedImages: {
            inlineImageLimit: 1000,
            handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif'],
            optimizeImages: process.env.NODE_ENV === 'production',
            optimizeImagesInDev: false,
            responsive: {
                test: /\.(jpe?g|png)$/i,
                loader: 'responsive-loader',
                options: {
                    adapter: require('responsive-loader/sharp'),
                },
            },
            mozjpeg: {
                quality: 80,
            },
            optipng: {
                optimizationLevel: 3,
            },
            pngquant: false,
            webp: {
                preset: 'default',
                quality: 80,
            },
        },

        // Build Configuration: https://go.nuxtjs.dev/config-build
        build: {
            parallel: true,
            cache: true,
            analyze: process.env.NODE_ENV !== 'production',
            extractCSS: process.env.NODE_ENV === 'production',
            optimizeCSS: process.env.NODE_ENV === 'production',
            transpile: ['vuetify/lib'],
        }
    }
}
