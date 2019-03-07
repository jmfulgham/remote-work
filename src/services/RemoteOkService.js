export default class RemoteOkService {

    getRemoteOkJobs() {
        const axios = require('axios');
        return axios({
            method:'get',
            url:'https://remoteok.io/api'
        }).then((response) => {
               return response.data
            });
    }
}