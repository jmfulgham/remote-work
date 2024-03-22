let P = require('rss-parser');
let parser = new P();


    const useGetWWRDevOpsJobs = async ()=>{
        let soRssUrl = '/api/weWorkRemotely/devOps';
        let feed = await parser.parseURL(soRssUrl).then(res=> res.items).catch(e => {
            return `WWR DevOps. error, ${e}`
        });
        return feed;
    }

    const useGetWWRProductJobs = async ()=>{
        let soRssUrl = '/api/weWorkRemotely/product';
        let feed = await parser.parseURL(soRssUrl).then(res=> res.items).catch(e => {
            return `WWR Product error, ${e}`
        });
        return feed;
    }

    const useGetWWRDesignJobs= async ()=>{
        let soRssUrl = '/api/weWorkRemotely/design';
        let feed = await parser.parseURL(soRssUrl).then(res=> res.items).catch(e => {
            return `WWR Design error, ${e}`
        });
        return feed;
    }

   export const useGetWeWorkRemotelyJobs = async() => {
        let allWwrJobs = [];
        let designJobs = await useGetWWRDesignJobs();
       let productJobs= await useGetWWRProductJobs();
       let devOpsJobs = await useGetWWRDevOpsJobs();
       allWwrJobs.concat(designJobs,productJobs,devOpsJobs);
       console.log(allWwrJobs)
       return handleRSSFeed(allWwrJobs);
    }

    const handleRSSFeed = (feed) => {
        if (feed.length) {
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
        } else return []
    }
