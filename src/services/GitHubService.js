const axios = require('axios');
export default class GitHubService {

     getAllGitHubRemoteJobs(){

        return axios({
            method:'get',
            url: 'https://jobs.github.com/positions.json?location=remote'
        }).then((response) => {
            return response.data;
        }).catch(e =>{
            return e;
        })
    }
}

