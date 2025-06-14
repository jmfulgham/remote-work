
export const useGetRemoteOkJobs = async () => {
    const remoteOkUrl = '/api/remoteOkRss';
    const resp = await fetch(remoteOkUrl)
    const data = await resp.json()

    if (data.length) {
        const jobs = handleRemoteOkJobs(data)
        return {
            jobs,
            error: false,
            loading: false
        }
    }
    return {jobs: [], error: true, loading: true}
}

const handleRemoteOkJobs = (jobs) => {
    if (jobs.length) return jobs.slice(1, jobs.length).map(job => job);
    else return []
}

