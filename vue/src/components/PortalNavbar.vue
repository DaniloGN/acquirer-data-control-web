<template>
    <v-toolbar dense dark tabs class="portalNav">
        <v-toolbar-title>Like</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
        <v-tabs slot="extension" fixed-tabs color="transparent" slider-color="blue">
            <v-tab v-for="(item, i) in items" :key="i" :to=item.to>
                {{item.text}}
            </v-tab>
        </v-tabs>
    </v-toolbar>
</template>

<script>
export default {
    name: 'portalNavbar',
    components: {
    },
    data(){
        return{
            items:[
                {text: 'Dashboard', to: '/'},
                {text: 'Arquivos', to: '/arquivos'},
                {text: 'Contratos', to: '/contratos'},
                {text: 'Clientes', to: '/clientes'},
                {text: 'Adquirentes', to: '/adquirentes'},
            ]
        }
    }
}
</script>

<style>
.portalNav{
    background-image: linear-gradient(90deg, #1c3b65, #1F6382, #40b9bb)
}
</style>