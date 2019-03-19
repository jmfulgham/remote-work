let Parser = require('rss-parser');
let parser = new Parser();

export default class StackOverflowService {

    async getStackOverflowJobs() {
        let soRssUrl = '/api/stackOverflow';
        let feed = await parser.parseURL(soRssUrl).catch(e => {
            return `S.O. error, ${e}`
        });
        return this.handleStackOverflowFeed(feed);
    }

    handleStackOverflowFeed(feed) {
        return feed.items.slice(0, 50).map(job => {
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