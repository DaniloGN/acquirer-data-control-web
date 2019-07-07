import Api from '@/services/Api'

export default {
    getAcquirers () {
        return Api().get('adquirentes')
    },
    createAcquirer(name){
        return Api().post('adquirentes', {'name': name})
    },
    deleteAcquirer(id){
        return Api().delete('adquirentes/'+id)
    }
}