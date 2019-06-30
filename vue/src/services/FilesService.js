import Api from '@/services/Api'

export default {
    getFiles () {
        return Api().get('arquivos')
    },
    async changeStatus(id, status){
        let response = await Api().put('arquivos/estado/'+id, status, {headers: {"Content-Type": "text/plain"}})
        return response.status;
    }

}