<template>
    <v-layout class="contracts">
        <v-flex xs12>
            <v-data-table :loading="loading" :headers="headers" :items="items" item-key="id" class="elevation-5" :no-data-text="'Nenhum contrato disponível'">
                <template slot="items" slot-scope="props">
                    <tr>
                        <td>{{ props.item.client }}</td>
                        <td>{{ props.item.acquirer }}</td>
                        <td>{{ props.item.establishment }}</td>
                        <td>{{ props.item.create_at}}</td>
                        <td>
                            <v-btn small @click="deleteContract(props.item)"><v-icon>close</v-icon>Excluir</v-btn>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-flex>
    </v-layout>
</template>

<script>
    import ContractService from '../services/ContractService.js'
    export default {
        components: {
        },
        data () {
            return {
                loading: false,
                headers: [
                    { text: 'Cliente', value: 'client', sortable: true},
                    { text: 'Adquirente', value: 'acquirer', sortable: true},
                    { text: 'Estabelecimento', value: 'establishment', sortable: false},
                    { text: 'Data de vínculo', value: 'create_at', sortable: false},
                    {value: 'actions'}
                ],
                items: [],
            }
        },
        mounted(){
            this.loading = true;
            ContractService.getContracts().then((response)=>{
                this.items = response.data
                // eslint-disable-next-line no-console
                console.log(response.data)
                this.loading = false;
            })
        },
        props:{
        },
        created () {
        },

        methods: {
            async deleteContract(contract){
                if(confirm('Tem certeza que deseja desvincular este contrato?') === true){
                    let response = await ContractService.deleteContract(contract.id)
                    if(response.status == 200) this.items.splice(this.items.indexOf(contract), 1)
                }
            }
        },
    }

</script>

<style lang="sass">

</style>