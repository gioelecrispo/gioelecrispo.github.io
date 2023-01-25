
export const fetchSitemapRoutes = async () => {
    const { $content } = require('@nuxt/content')
    const blogPosts = await $content({ deep: true }).only(['path']).fetch()
    const blogPostsPaths = blogPosts.map(file => file.path === '/index' ? '/' : file.path)

    return blogPostsPaths;
}
