let Parser = require('rss-parser');
let parser = new Parser();

export default class WeWorkRemotelyService {

    async getWWRDevOpsJobs() {
        let soRssUrl = '/api/weWorkRemotely/devOps';
        let feed = await parser.parseURL(soRssUrl).catch(e => {
            return `WWR DevOps. error, ${e}`
        });
        return feed.items;
    }

    async getWWRProductJobs(){
        let soRssUrl = '/api/weWorkRemotely/product';
        let feed = await parser.parseURL(soRssUrl).catch(e => {
            return `WWR Product error, ${e}`
        });
        return feed.items;
    }

    async getWWRDesignJobs(){
        let soRssUrl = '/api/weWorkRemotely/design';
        let feed = await parser.parseURL(soRssUrl).catch(e => {
            return `WWR Design error, ${e}`
        });
        return feed.items;
    }

   async concatAndFormatFeed(feed){
        let allWwrJobs;
        let designJobs = await this.getWWRDesignJobs();
       let productJobs= await this.getWWRProductJobs();
       let devOpsJobs = await this.getWWRDevOpsJobs();
       allWwrJobs = designJobs.concat(productJobs,devOpsJobs);
       return this.handleRSSFeed(allWwrJobs);

    }

    handleRSSFeed(feed) {
        return feed.map(job => {
            return {
                Id: job.guid,
                Date: job.isoDate,
                Position: job.title,
                Company: job.company,
                Focus: job.categories,
                Source: job.link,
                Apply: job.link,
                Description: job.content,
            };
        });
    }
}