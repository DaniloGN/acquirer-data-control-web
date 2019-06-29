<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-toolbar flat color="white">
            <v-toolbar-title>Arquivos</v-toolbar-title>
            <v-divider class="mx-2" inset vertical></v-divider>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-container fluid>
            <v-layout>
                <v-flex xs12>
                    <v-data-table :headers="headers" :items="items" item-key="id">
                        <template v-slot:items="props">
                            <td>{{ props.item.acquirer_name }}</td>
                            <td class="">{{ props.item.establishment }}</td>
                            <td class="">{{ props.item.sequence }}</td>
                            <td class="">{{ props.item.processing_date }}</td>
                            <td class="">{{ props.item.registry_type }}</td>
                            <td class="">{{ props.item.initial_period }}</td>
                            <td class="">{{ props.item.final_period }}</td>
                        </template>
                    </v-data-table>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import FilesService from '../services/FilesService.js'
    export default {
        components: {
        },
        data () {
            return {
                headers: [
                    { text: 'Adquirente', value: 'acquirer_name', sortable: true},
                    { text: 'Estabelecimento', value: 'establishment', sortable: false},
                    { text: 'Sequência', value: 'sequence', sortable: false},
                    { text: 'Data de processamento', value: 'processing_date', sortable: true },
                    { text: 'Tipo de Registro', value: 'registry_type', sortable: false},
                    { text: 'Periodo inicial', value: 'initial_period', sortable: true},
                    { text: 'Periodo final', value: 'final_period', sortable: true},
                    {sortable: false}
                ],
                items: [],
            }
        },
        mounted(){
            FilesService.getFiles().then((response)=>{
                this.items = response.data
            })
        },
        props:{
        },
        created () {
        },

        methods: {
        },
    }

</script>

<style lang="sass">

</style>

