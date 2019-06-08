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
    url:
  }
];

function importJobs () {
  let data = [];

  services.forEach((service) => {
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
}
  // fs.writeFile('jobs.json', JSON.stringify(data), (err) => {
  //   console.error(err)
  // })};

function formatGithubJobs (data) {
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

importJobs()
