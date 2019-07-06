<template>
    <v-layout class="acquirers" row wrap>
        <template v-for="(item, i) in clients">
            <v-flex xs12 sm6 md4 :key="i">
                <infoCard content="adquirente" :item="item" :key="i">
                </infoCard>
            </v-flex>
        </template>
        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title>
                    <h3>Adicionar um cliente</h3>
                </v-card-title>
                <v-card-text>
                    <v-text-field v-model="name" label="Nome do cliente"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click="dialog=false">Close</v-btn>
                    <v-btn color="primary" :disabled="confirmInput()" :loading="loading" flat @click="create()">Adicionar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-fab-transition>
            <v-btn @click="dialog = true" color="cyan darken-3" dark fab fixed bottom left><v-icon>add</v-icon></v-btn>
        </v-fab-transition>
    </v-layout>
</template>

<script>
    import ClientService from '../services/ClientService.js'
    import InfoCard from '../components/InfoCard.vue'
    export default {
        components: {
            InfoCard
        },
        data () {
            return {
                loading: false,
                clients: [],
                content: 'cliente',
                name: null,
                dialog: false,

            }
        },
        mounted(){
            this.loading = true;
            ClientService.getClients().then((response)=>{
                this.clients = response.data
                this.loading = false;
            })
        },
        props:{
        },
        created () {
        },

        methods: {
            async create(){
                await ClientService.createClient(this.name).then((response)=>{
                    this.clients.push(response.data)
                })
                this.dialog = false
            },
            confirmInput(){
                if(this.name != "" && this.name != null) return false
                else return true
            },
            delete(id){
                ClientService.deleteClient(id)
            }
        },
    }

</script>

<style lang="sass">

</style>
