const axios = require('axios');
export default class GitHubService {

     getAllGitHubRemoteJobs(){

        let githubJobsUrl = 'https://jobs.github.com/positions?location=remote';
        return axios({
            method:'get',
            url: 'https://jobs.github.com/positions.json?location=remote'
        }).then((response) => {
            return response.data;
        }).catch(e =>{
            console.log(e)
        })
    }
}

