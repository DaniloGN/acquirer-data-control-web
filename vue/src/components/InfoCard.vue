<template>
    <v-card class="pa-2 ma-2 elevation-2">
        <v-card-title ><h3>{{item.name}}</h3><v-divider class="ml-4"></v-divider></v-card-title>
        <v-card-text><p>Número de {{content}}s: {{item.contract_number}}</p></v-card-text>
        <v-card-actions class="align-content-center">
            <v-spacer></v-spacer>
            <v-btn flat small class="blue-grey--text">Adicionar {{content}}</v-btn>
            <v-btn flat small class="red--text">Remover {{content}}</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'InfoCard',
        components: {
        },
        props:{
            content: String,
            item: Object,
        },
    }
</script>

<style lang="sass">

</style>