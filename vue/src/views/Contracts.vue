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
            <v-fab-transition>
                <v-btn @click="openContractDialog()" color="cyan darken-3" dark fab fixed bottom left><v-icon>add</v-icon></v-btn>
            </v-fab-transition>
            <v-dialog v-model="contractDialog" max-width="500px">
                <v-card>
                    <v-card-title>
                        <h3>Adicionar um contrato</h3>
                    </v-card-title>
                    <v-card-text>
                        <v-select return-object outline v-model="selectedClient" :items="clients" label="Selecione o cliente" item-value="id" item-text="name"></v-select>
                        <v-select return-object outline v-model="selectedAcquirer" :items="acquirers" label="Selecione o adquirente" item-value="id" item-text="name"></v-select>
                        <v-text-field v-model="establishment" label="Número do estabelecimento" outline counter="10" type="number"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" flat @click="contractDialog=false">Close</v-btn>
                        <v-btn color="primary" :disabled="confirmSelected()" :loading="loading" flat @click="addContract()">Adicionar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-flex>
    </v-layout>
</template>

<script>
    import ContractService from '../services/ContractService.js'
    import ClientService from '../services/ClientService.js'
    import AcquirerService from '../services/AcquirerService.js'

    export default {
        components: {
        },
        data () {
            return {
                loading: false,
                contractDialog: false,
                headers: [
                    { text: 'Cliente', value: 'client', sortable: true},
                    { text: 'Adquirente', value: 'acquirer', sortable: true},
                    { text: 'Estabelecimento', value: 'establishment', sortable: false},
                    { text: 'Data de vínculo', value: 'create_at', sortable: false},
                    {value: 'actions'}
                ],
                items: [],
                clients: [],
                acquirers: [],
                selectedClient: null,
                selectedAcquirer: null,
                establishment: null,
            }
        },
        mounted(){
            this.loading = true;
            ContractService.getContracts().then((response)=>{
                this.items = response.data
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
            },
            async openContractDialog(){
                if(this.clients.length == 0) await ClientService.getClients().then((response)=>{ this.clients = response.data})
                if(this.acquirers.length == 0) await AcquirerService.getAcquirers().then((response)=>{ this.acquirers = response.data})
                this.contractDialog = true
            },
            confirmSelected(){
                if(this.selectedClient != null && this.selectedAcquirer != null && this.establishment != null) return false
                else return true
            },
            async addContract(){
                this.loading = true
                let response = await ContractService.postContracts(this.selectedClient, this.selectedAcquirer, parseInt(this.establishment))
                this.loading = false
                this.contractDialog = false
            }
        },
    }

</script>

<style lang="sass">
</style>