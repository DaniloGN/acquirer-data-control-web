import Api from '@/services/Api'

export default {
    getContracts () {
        return Api().get('contratos')
    },
    postContracts (client, acquirer, establishment) {
        return Api().post('contratos', {body: {client: client, acquirer: acquirer, establishment: establishment}}, {headers: {"Content-Type": "application/json"}})
    }
}