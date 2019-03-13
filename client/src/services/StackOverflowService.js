const Feed = require('feed-to-json-promise');

export default class StackOverflowService {

    getStackOverflowJobs() {
        const feed = new Feed();
        return feed.load('/api/stackOverflow')
            .then(res => {
                let soFeed = this.handleStackOverflowFeed(res);
                console.log("My cup overfloweth");
                return soFeed;
            }).catch(e => {
                return `Stack Overflow has experienced an error ${e}`
            });
    }

    handleStackOverflowFeed(feed) {
        let stackOverflowImg = feed.image.url;
        let jobDetails = feed.items.map(job => {
            let listing = {
                Date: job.date,
                Position: job.title,
                Focus: job.categories,
                Apply: job.link,
                Description: job.description,
            };
            return listing;
        });

        jobDetails.img = stackOverflowImg;
        return jobDetails;

    }
}