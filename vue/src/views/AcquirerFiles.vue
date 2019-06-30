<template>
    <v-layout class="files">
        <v-flex xs12>
            <v-data-table :loading="loading" :headers="headers" :items="items" item-key="id" class="elevation-5" :no-data-text="'Nenhum arquivo disponível'">
                <template v-slot:items="props">
                    <tr>
                        <td>{{ props.item.acquirer_name }}</td>
                        <td class="white--text" :style="{backgroundColor: statusColor(props.item.status)}">{{ props.item.status }}</td>
                        <td class="">{{ props.item.establishment }}</td>
                        <td class="">{{ props.item.sequence }}</td>
                        <td class="">{{ props.item.processing_date }}</td>
                        <td class="">{{ props.item.registry_type }}</td>
                        <td class="">{{ props.item.initial_period }}</td>
                        <td class="">{{ props.item.final_period }}</td>
                        <td>
                            <v-layout row>
                            <v-btn flat fab @click="acceptFile(props.item.id, props.item)"><v-icon>check</v-icon></v-btn>
                            <v-btn flat fab @click="rejectFile(props.item.id, props.item)"><v-icon>close</v-icon></v-btn>
                            </v-layout>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-flex>
    </v-layout>
</template>

<script>
    import FilesService from '../services/FilesService.js'
    export default {
        components: {
        },
        data () {
            return {
                loading: false,
                headers: [
                    { text: 'Adquirente', value: 'acquirer_name', sortable: true},
                    { text: 'Estado', value: 'status', sortable: true},
                    { text: 'Estabelecimento', value: 'establishment', sortable: false},
                    { text: 'Sequência', value: 'sequence', sortable: false},
                    { text: 'Data de processamento', value: 'processing_date', sortable: true },
                    { text: 'Tipo de Registro', value: 'registry_type', sortable: false},
                    { text: 'Periodo inicial', value: 'initial_period', sortable: true},
                    { text: 'Periodo final', value: 'final_period', sortable: true},
                    {},
                    {sortable: false}
                ],
                items: [],
            }
        },
        mounted(){
            this.loading = true;
            FilesService.getFiles().then((response)=>{
                this.items = response.data
                this.loading = false;
            })
        },
        props:{
        },
        created () {
        },

        methods: {
            statusColor(status){
                 if(status === "Aprovado") return "#5EEF5E"
                 else if(status === "Rejeitado") return "#FF3232"
                 else return "#B3B3B3"
            },
            async acceptFile(id, item) {
                let response = await FilesService.changeStatus(id, "Aprovado")
                if(response == 200) item.status = "Aprovado"

            },
            async rejectFile(id, item){
                let response = await FilesService.changeStatus(id, "Rejeitado")
                if(response == 200) item.status = "Rejeitado"
            }
        },
    }

</script>

<style lang="sass">

</style>

