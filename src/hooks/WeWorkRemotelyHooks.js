import Parser from "rss-parser";
let parser = new Parser();

const useGetWWRDevOpsJobs = async () => {
  const soRssUrl =
    "https://weworkremotely.com/categories/remote-devops-sysadmin-jobs.rss";
  const feed = await fetch(soRssUrl);
  return await parser
    .parseString(await feed.text())
    .then((res) => res.items)
    .catch((e) => {
      return `WWR DevOps error, ${e}`;
    });
};

const useGetWWREngineerJobs = async () => {
  const soRssUrl =
    "https://weworkremotely.com/categories/remote-programming-jobs.rss";
  const feed = await fetch(soRssUrl);
  return await parser
    .parseString(await feed.text())
    .then((res) => res.items)
    .catch((e) => {
      throw new Error(`WWR Engineering error, ${e}`);
    });
};

const useGetWWRProductJobs = async () => {
  const soRssUrl =
    "https://weworkremotely.com/categories/remote-product-jobs.rss";
  const feed = await fetch(soRssUrl);
  return await parser
    .parseString(await feed.text())
    .then((res) => res.items)
    .catch((e) => {
      throw new Error(`WWR Product error, ${e}`);
    });
};

const useGetWWRDesignJobs = async () => {
  let soRssUrl = "https://weworkremotely.com/categories/remote-design-jobs.rss";
  const feed = await fetch(soRssUrl);
  return await parser
    .parseString(await feed.text())
    .then((res) => res.items)
    .catch((e) => {
      throw new Error(`WWR Design error, ${e}`);
    });
};

export const useGetWeWorkRemotelyJobs = async () => {
  try {
    const responses = Promise.all([
      useGetWWREngineerJobs(),
      useGetWWRDesignJobs(),
      useGetWWRProductJobs(),
      useGetWWRDevOpsJobs(),
    ]);
    const flatJobs = await responses;
    const jobs = handleRSSFeed(flatJobs.flat());
    return {
      jobs,
      error: {},
    };
  } catch (e) {
    return { jobs: [], error: { message: e } };
  }
};

const handleRSSFeed = (feed) => {
  if (feed.length) {
    return feed.map((job) => {
      return {
        id: job.guid,
        date: job.isoDate,
        position: job.title,
        company: job.company,
        tags: job.categories,
        url: job.link,
      };
    });
  } else return [];
};
