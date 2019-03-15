const axios = require('axios');

export default class RemoteOkService {


    getRemoteOkJobs() {
        let remoteOkUrl = '/api/remoteOk';
        return axios({
            method: 'get',
            url: `${remoteOkUrl}`
        }).then((response) => {
            let jobs = response.data;
            return this.handleRemoteOkJobs(jobs);
        }).catch(e => {
            return `Remote is not able to respond ${e}`
        });
    }

    handleRemoteOkJobs(jobs) {
        jobs.shift();
        let jobDetails = jobs.map(job => {
            return {
                Id: job.id,
                Date: job.date,
                Position: job.position,
                Company: job.company,
                Focus: job.tags,
                Apply: job.url,
                Description: job.description,
            };
        });

        let remoteOkLogoUrl = "https://remoteok.io/assets/jobs/7413913e967dd6b6529234122167acd0.png";
        jobDetails.img = remoteOkLogoUrl;
        return jobDetails;

    }
}