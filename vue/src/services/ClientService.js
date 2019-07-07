import Api from '@/services/Api'

export default {
    getClients () {
        return Api().get('clientes')
    },
    createClient(name){
        return Api().post('clientes', {'name': name})
    },
    deleteClient(id){
        return Api().delete('clientes/'+id)
    }
}