import Api from '@/services/Api'

export default {
    getFiles () {
        return Api().get('arquivos')
    },
    sendFile(formData){
        return Api().post('arquivos', formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    async changeStatus(id, status){
        let response = await Api().put('arquivos/estado/'+id, status, {headers: {"Content-Type": "text/plain"}})
        return response.status;
    },
    async getFilesStatistics(name,initial_date,final_date){
        let response;
        if(name!= null && initial_date != null) response = await Api().get('arquivos/estatisticas?adquirente='
            +name+'&data_inicial='+initial_date+'&data_final='+final_date)
        else if(name != null) response = await Api().get('arquivos/estatisticas?adquirente='+name)
        else response = await Api().get('arquivos/estatisticas')
        return response.data
    },
    async downloadFile(id){
        await Api().get('arquivos/download/'+id, {headers: {'Content-Type':'application/txt'}}).then((response)=>{
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', response.data+'.txt');
            document.body.appendChild(link);
            link.click();
        })
    }

}