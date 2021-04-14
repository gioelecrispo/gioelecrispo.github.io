
export const fetchSitemapRoutes = async () => {
    /*const { $content } = require('@nuxt/content')
    console.log("$content", $content)
    const routes = []
    const articles = await $content('articles')
        .only(['title', 'slug',])
        .fetch();

    articles.forEach((article) => routes.push(`/articles/${article.slug}`));
    return routes;*/
    const { $content } = require('@nuxt/content')
    const files = await $content({ deep: true }).only(['path']).fetch()

    return files.map(file => file.path === '/index' ? '/' : file.path)
}
