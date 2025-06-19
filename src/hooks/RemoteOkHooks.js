export const useGetRemoteOkJobs = async () => {
  try {
    const feed = await fetch("https://remoteok.com/api");
    const data = await feed.json();

    if (data.length) {
      const jobs = handleRemoteOkJobs(data);
      return {
        jobs,
        error: false,
        loading: false,
      };
    }
  } catch (e) {
    return { jobs: [], error: { message: e }, loading: true };
  }
};

const handleRemoteOkJobs = (jobs) => {
  if (jobs.length) return jobs.slice(1, jobs.length).map((job) => job);
  else return [];
};
