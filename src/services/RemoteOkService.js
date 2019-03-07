const axios = require('axios');
export default class RemoteOkService {

    getRemoteOkJobs() {
        let remoteOkUrl = 'https://remoteok.io/api';
        return axios({
            method:'get',
            url: `${remoteOkUrl}`
        }).then((response) => {
               return response.data
            }).catch(e=>{
                return e
        });
    }
}