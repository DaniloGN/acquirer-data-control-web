import Api from '@/services/Api'

export default {
    getAcquirers () {
        return Api().get('adquirentes')
    },
}