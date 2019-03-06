import GitHubService from '../GitHubService.js';

//
// let gitHubServiceMock = jest.fn(gitHubService.getAllGitHubRemoteJobs().resolve);


jest.mock('../GitHubService.js');
describe('GitHubService', () => {

    it('returns a status 200 on gtAllGitHubRemoteJobs', async () => {
        let gitHubService = new GitHubService();
        try {
                let res = await gitHubService.getAllGitHubRemoteJobs();
               expect()
            } catch (e) {
                expect(e).toEqual({
                    error: 'User with 1 not found.'
                })
            }
        }
    )
});