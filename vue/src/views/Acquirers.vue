<template>
      <v-layout class="acquirers" row wrap>
          <template v-for="(item, i) in acquirers">
              <v-flex xs12 sm6 md4 :key="i">
                  <infoCard content="cliente" :item="item" :key="i">
                  </infoCard>
              </v-flex>
          </template>
          <v-dialog v-model="dialog" max-width="500px">
              <v-card>
                  <v-card-title>
                      <h3>Adicionar um adquirente</h3>
                  </v-card-title>
                  <v-card-text>
                      <v-text-field v-model="name" label="Nome do adquirente"></v-text-field>
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
    import AcquirerService from '../services/AcquirerService.js'
    import InfoCard from '../components/InfoCard.vue'
    export default {
        components: {
            InfoCard
        },
        data () {
            return {
                name: null,
                loading: false,
                acquirers: [],
                content: 'cliente',
                dialog: false
            }
        },
        mounted(){
            this.loading = true;
            AcquirerService.getAcquirers().then((response)=>{
                this.acquirers = response.data
                this.loading = false;
            })
        },
        props:{
        },
        created () {
        },

        methods: {
            async create(){
                await AcquirerService.createAcquirer(this.name).then((response)=>{
                    this.acquirers.push(response.data)
                })
                this.dialog = false
            },
            confirmInput(){
                if(this.name != "" && this.name != null) return false
                else return true
            },
            delete(id){
                AcquirerService.deleteAcquirer(id)
            }
        },
    }

</script>

<style lang="sass">

</style>
