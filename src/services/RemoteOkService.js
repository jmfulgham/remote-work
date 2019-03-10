const axios = require('axios');

export default class RemoteOkService {


    getRemoteOkJobs() {
        let remoteOkUrl = 'https://remoteok.io/api';
        return axios({
            method: 'get',
            url: `${remoteOkUrl}`
        }).then((response) => {
            let jobs = response.data;
            let handledJobs = this.handleRemoteOkJobs(jobs);
            return handledJobs;
        }).catch(e => {
            return e
        });
    }

    handleRemoteOkJobs(jobs) {
        jobs.shift();
        let jobDetails = jobs.map(job => {
            let listing = {
                Date: job.date,
                Position: job.position,
                Company: job.company,
                Focus: job.tags,
                Apply: job.url,
                Description: job.description,


            };
             return listing;
        });
        let remoteOkLogoUrl = "https://remoteok.io/assets/jobs/7413913e967dd6b6529234122167acd0.png";
        jobDetails.img = remoteOkLogoUrl;
       return jobDetails;

    }
}