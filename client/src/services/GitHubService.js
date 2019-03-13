const axios = require('axios');
export default class GitHubService {

     getAllGitHubRemoteJobs() {

        return axios({
            method:'get',
            url: '/api/github'
        }).then((response) => {
            console.log("Hey girl, I got it");
           return this.handleGithubJobs(response.data);
        }).catch(e =>{
            console.log("NO RUN");
            return `Please try your GH request again ${e}`;
        })

    }

    handleGithubJobs(data) {
        return data.map(job => {
            return {
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
