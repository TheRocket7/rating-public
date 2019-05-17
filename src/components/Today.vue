<template>
    <div class="today">
        <div class="row">
            <div class="col-xl-6">
                <table class="table lm-30">
                    <thead>
                        <tr>
                            <th scope="col">Emotion</th>
                            <th scope="col">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="emotion in tableData" :key="emotion[0]">
                            <th scope="row">{{emotion[0]}}</th>
                            <td>{{ emotion[1] }}</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
            <div class="col-xl-6">
                <GChart
                    type="PieChart"
                    :data="chartDataPie"
                    :options="chartOptionsPie"
                />
            </div>
        </div>
        <div class="col-xl-12">
            <GChart
                type="LineChart"
                :data="chartDataLine"
                :options="chartOptionsLine"
            />
        </div>
    </div>
</template>

<script>
    import { GChart } from 'vue-google-charts'
    import { mapMutations, mapState } from 'vuex'

    export default {
        name: 'Today',
        props: {
            settings: Object
        },
        data () {
            return {
                tableData: [],
                date: new Date()
            }
        },
        components: {
            GChart
        },
        methods: {
            pullData(date) {
                this.$store.commit('updateDataLine');
                this.$store.commit('updateDataPie');
                this.tableData = this.updatedChartDataPie;
                console.log(date);
            }
        },  
        computed: {
            ...mapState([
                'chartOptionsLine',
                'chartDataHeaderLine',
                'updatedChartDataLine',
                'chartOptionsPie',
                'chartDataHeaderPie',
                'updatedChartDataPie',
                'dateForData'
            ]),
            chartDataLine () {
                return [ this.chartDataHeaderLine, ...this.updatedChartDataLine ]
            },
            chartDataPie () {
                return [ this.chartDataHeaderPie, ...this.updatedChartDataPie ]
            }
        },
        created () {
            this.$store.commit('updateDataLine');
            this.$store.commit('updateDataPie');
            this.tableData = this.updatedChartDataPie;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>