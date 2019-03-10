const Feed = require('feed-to-json-promise');

export default class StackOverflowService {

    getStackOverflowJobs() {
        const feed = new Feed();
       return feed.load('https://stackoverflow.com/jobs/feed?r=true')
            .then(res=>{
                return res;
            }).catch(e => {
            return `Stack Overflow has experienced an error ${e}`
        });
    }
}