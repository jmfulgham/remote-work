let Parser = require('rss-parser');
let parser = new Parser();

export default class StackOverflowService {

    async getStackOverflowJobs() {
        let soRssUrl = '/api/stackOverflow';
        let feed = await parser.parseURL(soRssUrl).catch(e => {
            return `S.O. error, ${e}`
        });
        let modifiedFeed= feed.items.slice(0,65);
        return this.handleStackOverflowFeed(modifiedFeed);
    }

    handleStackOverflowFeed(feed) {
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