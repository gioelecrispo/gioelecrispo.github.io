export default async ({ store, $axios, $content }) => {
    let promises = [];
    let dataState = store.state["DataState"]
    if (!dataState.githubUserInfo) {
        promises.push($axios({
            url: "https://api.github.com/users/gioelecrispo",
            method: "get"
        })
            .then(success => {
                store.dispatch('DataState/setGithubUserInfo', success.data)
            })
            .catch(err => {
                console.error("setGithubUserInfo - Too Much Requests", err);
            })
        );
    }
    if (!dataState.githubProjects) {
        promises.push($axios({
            url: "https://api.github.com/users/gioelecrispo/repos",
            method: "get"
        })
            .then(success => {
                store.dispatch('DataState/setGithubProjects', success.data)
            })
            .catch(err => {
                console.error("setGithubProjects - Too Much Requests", err);
            })
        );
    }
    if (!dataState.blogArticles) {
        $content('articles')
            .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt', 'updatedAt'])
            .sortBy('createdAt', 'desc')
            .fetch()
            .then(articles => {
                store.dispatch('DataState/setBlogArticles', articles);
            });

    }
    return Promise.all(promises);
}
