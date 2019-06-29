import Api from '@/services/Api'

export default {
    getFiles () {
        return Api().get('files')
    },
    async changeStatus(id, status){
        let response = await Api().put('files/estado/'+id, status, {headers: {"Content-Type": "text/plain"}})
        return response.status;
    }

}