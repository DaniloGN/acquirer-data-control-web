<template>
    <v-container fluid id="body">
        <template v-for="(acquirer,i) in acquirers">
            <v-card v-if="acquirer.contract_number > 0" :key="i" class="elevation-5 pt-3 statistics-card">
                <vue-frappe v-if="render"
                        :id="acquirer.name+'chart'"
                        :title="'Número de arquivos recepcionados por ' + acquirer.name"
                        type="bar"
                        :labels="days"
                        :height="650"
                        :valuesOverPoints="true"
                        :colors="[ '#467dfd','#dd4558']"
                        :tooltipOptions="{'formatTooltipX': d => (acquirer.name+' '+ d),
      'formatTooltipY': d => d + ' arquivos'}"
                        :dataSets="[
                        {name: 'Recepcionados', values: received[i]},
                        {name: 'Não recepcionados', values: not_received[i]},]">
                </vue-frappe>
            </v-card>
        </template>
    </v-container>
</template>

<script>
    import AcquirerService from '../services/AcquirerService.js'
    import FilesService from '../services/FilesService.js'
    import DateUtil from '../utils/DateUtil.js'

    export default {
        name: 'dashboard',
        data() {
            return {
                render: false,
                days: [],
                acquirers: [],
                received: [],
                not_received: [],

            }
        },
        async created() {
            this.renderCharts()

        },
        async mounted() {

        },
        methods:{
            async renderCharts(){
                this.days = DateUtil.listDaysAgo(7)
                await AcquirerService.getAcquirers().then((response)=>{
                    this.acquirers = response.data
                })
                for(let i=0;i<this.acquirers.length;i++){
                    let maxNot = this.acquirers[i].contract_number
                    this.received.push([0,0,0,0,0,0,0])
                    this.not_received.push([maxNot,maxNot,maxNot,maxNot,maxNot,maxNot,maxNot])
                }
                let today = DateUtil.today()
                let lastWeek = DateUtil.oneWeekAgo()
                let acquirer_index = 0
                this.acquirers.forEach(async (acquirer) => {
                    let response = await FilesService.getFilesStatistics(acquirer.name, lastWeek, today)
                    response.forEach((value) => {
                        this.received[acquirer_index].splice(this.days.indexOf(value.send_date), 1, value.establishment_count)
                        this.not_received[acquirer_index].splice(this.days.indexOf(value.send_date), 1, (acquirer.contract_number - value.establishment_count))
                    })
                    acquirer_index++
                })
                this.render = true
            }
        }
    }
</script>

<style lang="sass">
    svg
        text
            font-size: 14px
            fill: black!important
    .statistics-card
        margin-bottom: 6vh
</style>