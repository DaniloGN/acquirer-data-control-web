import Api from '@/services/Api'

export default {
  getFiles () {
    return Api().get('files')
  },

}