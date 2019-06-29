<template>
    <div>
        <v-toolbar flat color="white">
            <v-toolbar-title>Membros</v-toolbar-title>
            <v-divider class="mx-2" inset vertical></v-divider>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-container fluid>
            <v-layout>
                <v-flex xs12>
                    <v-data-table :headers="headers" :items="items" item-key="id" >

                    </v-data-table>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import FilesService from '@./services/FilesService.js'
    export default {
        components: {
        },
        data () {
            return {
                hover: false,
                dialog: false,
                expand: false,
                headers: [
                    { text: 'Nome', value: 'nome', sortable: true},
                    { text: 'Cargo', value: 'situacao', sortable: false},
                    { text: 'Foto', value: 'foto', sortable: false },
                    {sortable: false}
                ],
                items: [],
            }
        },

        mounted(){
            FilesService.getFiles().then((response)=>{
                this.items = response.data.data
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
    .image-picker
        cursor: pointer
        position: absolute
        right: 0
        bottom: 0
        padding: 2%
        background-color: rgba(0,0,0,0.7)
</style>

