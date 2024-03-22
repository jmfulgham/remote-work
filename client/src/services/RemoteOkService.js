let P = require('rss-parser');
let parser = new P();

  export const useGetRemoteOkJobs = async () => {
        let remoteOkUrl = '/api/remoteOkRss';
        let feed = await parser.parseURL(remoteOkUrl)
      console.log('WTF', {feed})
        return handleRemoteOkJobs(feed)
        // console.log(feed.data)
       // return(feed)
       // feed.ok ? return this.handleRemoteOkJobs(feed.items): return null;
    }

    const handleRemoteOkJobs =(jobs)=> {
      console.log(jobs)
       if (jobs.length) {
           return jobs.slice(0, 60).map(job => {
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
      else return []
    }
