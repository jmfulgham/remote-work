const axios = require('axios')
const fs = require('fs')

function importGithubJobs () {
  let url = 'https://jobs.github.com/positions.json?&location=remote&page=1'
  return axios({
    method: 'get',
    url: url
  }).then((response) => {
    let data = handleGithubJobs(response.data)

    fs.appendFile('jobs.json', JSON.stringify(data), (err) => {
      console.error(err)
    })

    console.log('File appended with GH jobs')
  }).catch(e => {
    console.error(`Please try your GH request again ${e}`)
  })
}

function handleGithubJobs (data) {
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

importGithubJobs()
