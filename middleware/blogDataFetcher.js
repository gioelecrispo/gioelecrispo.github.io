export default async ({ store, $content }) => {
    let promises = []
    let dataState = store.state['DataState'];
    if (!dataState.blogArticles) {
        $content('blog')
            .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt', 'updatedAt'])
            .sortBy('createdAt', 'desc')
            .fetch()
            .then(articles => {
                store.dispatch('DataState/setBlogArticles', articles)
            })
    }
    return Promise.all(promises)
}
