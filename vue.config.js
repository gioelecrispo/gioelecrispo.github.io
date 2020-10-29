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
                /*{
                    test: /\.md$/,
                    loader: "vue-loader!vue-md-loader"
                },*/
                {
                    test: /\.md$/,
                    loader: "raw-loader"
                },
            ]
        }
    },
    /*css: {
        loaderOptions: {
            sass: {
                data: `
                   @import "@/assets/styles/scss/app/multipanes.scss";
                   @import "@/assets/styles/scss/app/elements.scss";
                   @import "@/assets/styles/scss/app/decorators.scss";
                   @import "@/assets/styles/scss/app/page-structure.scss";
                   @import "@/assets/styles/scss/app/_commons.scss";
                    `
            }
        }
    },*/
};
