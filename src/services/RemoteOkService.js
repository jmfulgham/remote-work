export default class RemoteOkService {

    async getRemoteOkJobs(){
        let res = await fetch('https://remoteok.io/api');
        if (res.ok){
            return await res
        }else{
            return ''
        }
    }

}