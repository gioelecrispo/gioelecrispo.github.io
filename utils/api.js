
export const getGithubUserInfo = async (axios) => {
    return axios({
        url: 'https://api.github.com/users/gioelecrispo',
        method: 'get'
    })
        .then(success => {
            return success.data;
        })
        .catch(err => {
            console.error('setGithubUserInfo - Too Much Requests', err)
        })
}

export const getGithubProjects = async (axios) => {
    return axios({
        url: 'https://api.github.com/users/gioelecrispo/repos',
        method: 'get'
    })
        .then(success => {
            return success.data;
        })
        .catch(err => {
            console.error('setGithubUserInfo - Too Much Requests', err)
        })
}
