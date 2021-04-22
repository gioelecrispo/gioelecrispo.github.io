export default async ({ store, $axios, $content }) => {
    let promises = [];
    console.log("MIDDLEWARE fetching");
    let dataState = store.state["DataState"];
    if (!dataState.githubUserInfo) {
        console.log("FETCHING github userInfo");
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
        console.log("FETCHING github projects");
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
        $content('blog')
            .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt', 'updatedAt'])
            .sortBy('createdAt', 'desc')
            .fetch()
            .then(articles => {
                store.dispatch('DataState/setBlogArticles', articles);
            });

    }
    return Promise.all(promises);
}
