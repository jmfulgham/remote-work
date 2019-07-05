const axios = require('axios');
const fs = require('fs');
let P = require('rss-parser');
let parser = new P();


let services = [
    {
        url: 'https://jobs.github.com/positions.json?&location=remote&page=1',
        formatter: formatGithubJobs
    },

    {
        url: 'https://remoteok.io/remote-jobs.rss',
        formatter: formatRemoteOkJobs
    },
    {
        url: 'https://stackoverflow.com/jobs/feed?r=true',
        formatter: formatStackOverflowFeed
    },

    // {
    //     url: 'https://weworkremotely.com/categories/remote-devops-sysadmin-jobs.rss',
    //     formatter:formatWeWorkFeeds
    // },


];

 async function importJobs() {
    let data = [];

  await services.forEach((service) => {
        let url = service.url;
        return axios({
            method: 'get',
            url: url
        }).then((response) => {
            data = data.concat(service.formatter(response.data));
            Promise.all(data).then(() => fs.writeFile('jobs.json', JSON.stringify(data), (err) => {
                console.error(err)
            })).catch(e => console.error("Couldn't create the file", e))
        }).catch(e => console.error("import error", e));

    });


    let promise = Promise.all(
        [getData(services[0].url, services[0].formatter)],
        [getData(services[2].url, services[2].formatter)]
    );

    promise.then((data) => {
        fs.writeFile('jobs.json', JSON.stringify(data[0]), (err) => {
            console.error(err)
        });
        console.log('File appended with jobs data' + data[0].length)
    });

    function getData(url, formatter) {
        return axios({
            method: 'get',
            url: url
        }).then((response) => {
            return formatter(response.data)
        }).catch(e => {
            console.error(`Please try your request again ${e}`)
        })
    }

    // fs.writeFile('jobs.json', JSON.stringify(data), (err) => {
    //   console.error(err)
    // })};

    function formatGithubJobs(data) {
        return data.slice(0, 25).map(job => {
            return {
                Id: job.id,
                Date: job.created_at,
                Position: job.title,
                Company: job.company,
                'Company Website': job.company_url,
                Source: job.url,
                Description: job.description
            }
        })
    }

    function formatRemoteOkJobs(data) {
        return data.slice(0, 60).map(job => {
            return {
                Id: job.guid,
                Date: job.isoDate,
                Position: job.title,
                Apply: job.link,
                Source: job.link,
                Description: job.content
            }
        })
    }

    function formatStackOverflowFeed(feed) {
        let parser = new P();
        let data = [];
        parser.parseString(feed, function (err, f) {
            f.items.map(job => {
                data.concat({
                    Id: job.guid,
                    Date: job.isoDate,
                    Position: job.title,
                    Company: job.company,
                    Focus: job.categories,
                    Source: job.link,
                    Apply: job.link,
                    Description: job.content
                });
            });
        });
        return data;

    }

    // function formatWeWorkFeeds(feed) {
    //     return feed.map(job => {
    //         return {
    //             Id: job.guid,
    //             Date: job.isoDate,
    //             Position: job.title,
    //             Company: job.company,
    //             Focus: job.categories,
    //             Source: job.link,
    //             Apply: job.link,
    //             Description: job.content,
    //         };
    //     });
    // }
}

