export default async ({ store, $axios }) => {
    let promises = []
    let dataState = store.state['DataState'];
    promises.push($axios({
            url: 'https://api.github.com/users/gioelecrispo',
            method: 'get'
        })
            .then(success => {
                store.dispatch('DataState/setGithubUserInfo', success.data)
            })
            .catch(err => {
                console.error('setGithubUserInfo - Too Much Requests', err)
            })
    )
    promises.push($axios({
            url: 'https://api.github.com/users/gioelecrispo/repos',
            method: 'get'
        })
            .then(success => {
                store.dispatch('DataState/setGithubProjects', success.data)
                //console.log("projects", store.state.DataState.githubProjects);
            })
            .catch(err => {
                console.error('setGithubProjects - Too Much Requests', err)
            })
    )
    return Promise.all(promises);
}
