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
                Position: job.position,
                Company: job.company,
                Focus: job.tags,
                Apply: job.url,
                Description: job.description,


            };
             return listing;
        });
       return jobDetails;

    }
}