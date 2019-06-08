const axios = require('axios')
const fs = require('fs')
const P = require('rss-parser')

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
  }
]

let promise = Promise.all(
  [getData(services[0].url, services[0].formatter)],
  [getData(services[2].url, services[2].formatter)]
)

promise.then((data) => {
  fs.writeFile('jobs.json', JSON.stringify(data[0]), (err) => {
    console.error(err)
  })
  console.log('File appended with jobs data' + data[0].length)
})

function getData (url, formatter) {
  return axios({
    method: 'get',
    url: url
  }).then((response) => {
    return formatter(response.data)
  }).catch(e => {
    console.error(`Please try your request again ${e}`)
  })
}

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

function formatRemoteOkJobs (data) {
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

function formatStackOverflowFeed (feed) {
  let parser = new P()
  let data = []
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
      })
    })
  })
  return data
}
