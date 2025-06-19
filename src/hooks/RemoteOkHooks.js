export const useGetRemoteOkJobs = async () => {
  try {
    const feed = await fetch("https://remoteok.com/api");
    const data = await feed.json();

    if (data.length) {
      return {
        jobs: data.slice(1, data.length),
        error: false,
        loading: false,
      };
    }
  } catch (e) {
    return { jobs: [], error: { message: e }, loading: true };
  }
};

