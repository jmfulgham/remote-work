let Parser = require('rss-parser');
let parser = new Parser();

export default class WeWorkRemotelyService {

    async getWeWorkRemotelyDevOpsJobs() {
        let soRssUrl = '/api/weWorkRemotely/devOps';
        let feed = await parser.parseURL(soRssUrl).catch(e => {
            return `S.O. error, ${e}`
        });
        return this.handleRSSFeed(feed.items);
    }

    async getWWRProductJobs(){
        let soRssUrl = '/api/weWorkRemotely/product';
        let feed = await parser.parseURL(soRssUrl).catch(e => {
            return `S.O. error, ${e}`
        });
        return this.handleRSSFeed(feed.items);
    }

    async getWWRDesignJobs(){
        let soRssUrl = '/api/weWorkRemotely/design';
        let feed = await parser.parseURL(soRssUrl).catch(e => {
            return `S.O. error, ${e}`
        });
        return this.handleRSSFeed(feed.items);
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