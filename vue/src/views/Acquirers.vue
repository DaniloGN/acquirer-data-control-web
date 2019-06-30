<template>
      <v-layout class="acquirers" row wrap>
          <template v-for="(item, i) in items">
              <v-flex xs12 sm6 md4 :key="i">
                  <infoCard content="cliente" :item="item" :key="i">
                  </infoCard>
              </v-flex>
          </template>
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
                loading: false,
                items: [],
                content: 'cliente'
            }
        },
        mounted(){
            this.loading = true;
            AcquirerService.getAcquirers().then((response)=>{
                this.items = response.data
                this.loading = false;
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
