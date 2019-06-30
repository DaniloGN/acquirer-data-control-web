import Api from '@/services/Api'

export default {
    getClients () {
        return Api().get('clientes')
    },
}