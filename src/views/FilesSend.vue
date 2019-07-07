<template>
    <div class="base_background">
        <h1 class="logo">Like</h1>
        <v-layout class="gradient" wrap>
            <v-spacer></v-spacer>
            <v-card class="elevation-20 file_card">
                <v-card-title>
                    <v-layout column class="text-sm-center">
                        <h2 class="mb-4">Bem-vindo!</h2>
                        <h3>Escolha o arquivo que deseja enviar</h3>
                    </v-layout>
                </v-card-title>
                <v-card-text>
                    <input type='file' ref="sendFile" @change="fileInputVerify()">
                    <v-btn :disabled="locked" color="blue" class="white--text" @click="sendFile()">Enviar</v-btn>
                </v-card-text>
            </v-card>
            <v-spacer></v-spacer>
        </v-layout>
    </div>
</template>

<script>
    import FilesService from "../services/FilesService.js";

    export default {
        components: {
        },
        data () {
            return {
                locked : true,
                file: null,
                loading: false,
            }
        },
        methods: {
            fileInputVerify(){
                this.file = this.$refs.sendFile.files[0]
                if(this.file === null) this.locked = true
                else this.locked = false
            },
            async sendFile() {
                let formData = new FormData()
                formData.append('file', this.file)
                FilesService.sendFile(formData).then((response)=>{
                    if(response.status === 200){
                        alert("Arquivo enviado com sucesso!")
                    }
                    else if(response.status === 400){
                        alert(response.data)
                    }
                    else alert("Erro ao enviar, tente novamente")
                })

            },
        }
    }
</script>

<style lang="sass" scoped>
    *
        font-weight: 300
    .logo
        position: absolute
        margin: 1%
        color: aliceblue
        font-size: 2em
        left: 0
        top: 0
    .base_background
        background-color: rgb(230, 230, 230)
        height: 100vh
    .gradient
        background-image: linear-gradient(90deg, #1c3b65, #1F6382, #40b9bb)
        height: 45vh
    .file_card
        position: relative
        transform: translateY(30vh)
        padding: 1%
        height: 35vh
        border-radius: 10px
</style>