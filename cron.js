import GitHubService from './client/src/services/GitHubService.js';

const cron = require('node-cron');

let ghService = new GitHubService;
cron.schedule('* * * * *', () => {
    console.log('This line will be printed only when the start method is called');
    let ghJobs = ghService.getAllGitHubRemoteJobs();
    console.log(ghJobs);
}, {
    scheduled: true
});




