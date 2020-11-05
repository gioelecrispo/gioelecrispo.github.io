const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
    publicPath: process.env.VUE_APP_NODE_ENV === "production" ? "./" : "./",
    outputDir: "dist", // The directory where the production build files will be generated in.
    assetsDir: "assets", // A directory (relative to outputDir) to nest generated static assets (js, css, img, fonts) under.
    indexPath: "index.html", // The output path for the generated index.html (relative to outputDir).
    lintOnSave: true,
    "transpileDependencies": [
        "vuetify"
    ],
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    loader: "raw-loader"
                },
            ]
        },
        plugins: [
            new PrerenderSPAPlugin({
                // Required - The path to the webpack-outputted app to prerender.
                staticDir: path.join(__dirname, 'dist'), // The directory where the production build files will be generated in.
                //outputDir: path.join(__dirname, 'prerendered'), // Optional - The path your rendered app should be output to. (default to staticDir)
                assetsDir: path.join(__dirname, 'assets'), // A directory (relative to outputDir) to nest generated static assets (js, css, img, fonts) under.
                indexPath: path.join(__dirname, 'index,html'), // The output path for the generated index.html (relative to outputDir).
                // Required - Routes to render.
                routes: [ '/', '/home', '/cv', '/projects', '/articles' ],
            })
        ]
    },
    /*css: {
        // global css, scss, sass import
        loaderOptions: {
            sass: {
                data: `
                   @import "@/assets/styles/scss/commons.scss";
                    `
            }
        }
    },*/
};
