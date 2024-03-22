const axios = require('axios');



   export const  useGetAllGitHubRemoteJobs= async () => {
        let url = '/api/github';
        const response = await axios({
            method:'get',
            url: url
        })
       if (response.data) {
           return handleGithubJobs(response.data);
       } else return []
    }

    const handleGithubJobs = (data) => {
        if (data.length) {
            return data.slice(0, 25).map(job => {
                return {
                    Id: job.id,
                    Date: job.created_at,
                    Position: job.title,
                    Company: job.company,
                    "Company Website": job.company_url,
                    Source: job.url,
                    Description: job.description,
                };
            });
        } else return []
    }


