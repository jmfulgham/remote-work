export default class GitHubService {
    async getAllGitHubRemoteJobs(){
        let res = await fetch('https://jobs.github.com/positions.json?location=remote');

        if(res.ok){
            return await res
        } else{
            return ''
        }
    }
}