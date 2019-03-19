let Parser = require('rss-parser');
let parser = new Parser();
export default class RemoteOkService {

   async getRemoteOkJobs() {
        let remoteOkUrl = '/api/remoteOkRss';
        let feed = await parser.parseURL(remoteOkUrl).catch(e =>{
        return `Remote error, ${e}`});
        return this.handleRemoteOkJobs(feed.items);
    }


    handleRemoteOkJobs(jobs) {
        return jobs.slice(0,50).map(job => {
            return {
                Id: job.guid,
                Date: job.isoDate,
                Position: job.title,
                Apply: job.link,
                Description: job.content,
                Logo: "https://remoteok.io/assets/jobs/7413913e967dd6b6529234122167acd0.png"
            };
        });

    }
}