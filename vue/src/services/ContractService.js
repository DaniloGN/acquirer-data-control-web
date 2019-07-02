import Api from '@/services/Api'

export default {
    getContracts () {
        return Api().get('contratos')
    },
    postContracts (client, acquirer, establishment) {
        delete client["contract_number"]
        delete acquirer["contract_number"]
        Api().post('contratos',{client: client, acquirer: acquirer, establishment: establishment}, {headers: {"Content-Type": "application/json"}})
            .then((response)=>{
                return response
            })
            .catch((err)=>{
                return err
            })
    },
    async deleteContract(id) {
        return await Api().delete('contratos',{ data: id });
    }
}