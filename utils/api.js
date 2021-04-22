export const getGithubUserInfo = async (axios, store) => {
    axios({
        url: 'https://api.github.com/users/gioelecrispo',
        method: 'get'
    })
        .then(success => {
            console.log("F");
            store.dispatch('DataState/setGithubUserInfo', success.data)
        })
        .catch(err => {
            console.error('setGithubProjects - Too Much Requests', err)
        })
}

export const getGithubProjects = async (axios, store) => {
    axios({
        url: 'https://api.github.com/users/gioelecrispo/repos',
        method: 'get'
    })
        .then(success => {
            console.log("F");
            store.dispatch('DataState/setGithubProjects', success.data)
        })
        .catch(err => {
            console.error('setGithubProjects - Too Much Requests', err)
        })
}
