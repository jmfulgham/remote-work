const axios = require('axios');

const moment = require('moment');
moment().format("MMM Do YY");

export default class GitHubService {

     getAllGitHubRemoteJobs() {

        return axios({
            method:'get',
            url: '/api/github'
        }).then((response) => {
           return this.handleGithubJobs(response.data);
        }).catch(e =>{
            return `Please try your GH request again ${e}`;
        })

    }

    handleGithubJobs(data) {
        return data.slice(0,20).map(job => {
            return {
                Id: job.id,
                Date: job.created_at,
                Position: job.title,
                Company: job.company,
                "Company Website": job.company_url,
                Source: job.url,
                Apply: job.how_to_apply,
                Description: job.description,
                Logo: job.company_logo
            };
        });
    }
}

