// let parser = new Parser();
const parser = new window.RSSParser()
export const useGetRemoteOkJobs = async () => {
    const remoteOkUrl = '/api/remoteOkRss';
    const feed = await parser.parseURL(remoteOkUrl)
    if (feed.items.length) {
        const jobs = handleRemoteOkJobs(feed)
        return {
            jobs,
            error: false,
            loading: false
        }
    }
    return {jobs: [], error: true, loading: true}
}

const handleRemoteOkJobs = (jobs) => {
    if (jobs.items.length) {
        return jobs.items.slice(0, 10).map(job => {
            return {
                Id: job.guid,
                Date: job.isoDate,
                Position: job.title,
                Apply: job.link,
                Source: job.link,
                Description: job.content,
            };
        });
    } else return []
}
