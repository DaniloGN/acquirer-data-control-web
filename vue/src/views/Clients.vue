<template>
    <v-layout class="acquirers" row wrap>
        <template v-for="(item, i) in items">
            <v-flex xs12 sm6 md4 :key="i">
                <infoCard content="adquirente" :item="item" :key="i">
                </infoCard>
            </v-flex>
        </template>
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
                items: [],
                content: 'cliente'
            }
        },
        mounted(){
            this.loading = true;
            ClientService.getClients().then((response)=>{
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
