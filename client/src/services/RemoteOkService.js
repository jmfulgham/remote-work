let P = require('rss-parser');
let parser = new P();
export default class RemoteOkService {

   async getRemoteOkJobs() {
        let remoteOkUrl = '/api/remoteOkRss';
        let feed = await parser.parseURL(remoteOkUrl).catch(e =>{
        return `Remote error, ${e}`});
        return this.handleRemoteOkJobs(feed.items);
    }


    handleRemoteOkJobs(jobs) {
        return jobs.slice(0,60).map(job => {
            return {
                Id: job.guid,
                Date: job.isoDate,
                Position: job.title,
                Apply: job.link,
                Source: job.link,
                Description: job.content,
            };
        });

    }
}