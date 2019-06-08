const axios = require('axios')
const fs = require('fs')

let services = [
  {
    url: 'https://jobs.github.com/positions.json?&location=remote&page=1',
    formatter: formatGithubJobs
  }
]

function importJobs () {
  let data = []

  services.forEach((service) => {
    let url = service.url
    return axios({
      method: 'get',
      url: url
    }).then((response) => {
      let d = service.formatter(response.data)
      data.concat(d)
    }).catch(e => {
      console.error(`Please try your GH request again ${e}`)
    })
  })

  fs.writeFile('jobs.json', JSON.stringify(data), (err) => {
    console.error(err)
  })
  console.log('File appended with jobs data')
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

importJobs()
