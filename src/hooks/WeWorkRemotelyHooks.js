import Parser from 'rss-parser';
let parser = new Parser();


     const useGetWWRDevOpsJobs = async ()=>{
        const soRssUrl = 'https://weworkremotely.com/categories/remote-devops-sysadmin-jobs.rss';
        const feed = await fetch(soRssUrl)
        return await parser.parseString(await feed.text()).then(res=> res.items).catch(e => {
            return `WWR DevOps error, ${e}`
        });
    }

    const useGetWWREngineerJobs = async () => {
        const soRssUrl = "https://weworkremotely.com/categories/remote-programming-jobs.rss";
        const feed = await fetch(soRssUrl);
        return await parser.parseString(await feed.text()).then(res=> res.items).catch(e => {
            return `WWR Engineering error, ${e}`
        });
    }

    const useGetWWRProductJobs = async ()=>{
        const soRssUrl = 'https://weworkremotely.com/categories/remote-product-jobs.rss';
        const feed = await fetch(soRssUrl);
        return await parser.parseString(await feed.text()).then(res=> res.items).catch(e => {
            return `WWR Product error, ${e}`
        });
    }

    const useGetWWRDesignJobs= async ()=>{
        let soRssUrl = 'https://weworkremotely.com/categories/remote-design-jobs.rss';
        const feed = await fetch(soRssUrl);
        return await parser.parseString(await feed.text()).then(res=> res.items).catch(e => {
            return `WWR Design error, ${e}`
        });

    }

    //TODO promise.all?
   export const useGetWeWorkRemotelyJobs = async() => {
        const allWwrJobs = [];
        try {
            const engineeringJobs = await useGetWWREngineerJobs()
            const designJobs = await useGetWWRDesignJobs();
            const productJobs= await useGetWWRProductJobs();
            const devOpsJobs = await useGetWWRDevOpsJobs();
            allWwrJobs.concat(engineeringJobs, designJobs,productJobs,devOpsJobs);

            const jobs = handleRSSFeed(engineeringJobs.concat(designJobs, productJobs, devOpsJobs))
            return {
                jobs,
                error: {},
            };
        } catch(e) {
            return {jobs: [], error: {message: e}}
        }
    }

    const handleRSSFeed = (feed) => {
        if (feed.length) {
            return feed.map(job => {
                return {
                    id: job.guid,
                    date: job.isoDate,
                    position: job.title,
                    company: job.company,
                    tags: job.categories,
                    url: job.link,
                };
            });
        } else return []
    }
