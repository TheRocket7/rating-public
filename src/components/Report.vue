<template>
    <div class="report">
        <div class="lm-30 mb-20">
            <datepicker v-model="date" name="TakeData" @selected="pullData"></datepicker>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <table class="table">
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
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapState } from 'vuex'
    import axios from "axios";
    import moment from "moment";

    export default {
        name: 'Report',
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
        },
        methods: {
            pullData(date) {
                axios({ method: "GET", "url": "http://localhost:52832/api/stats?date=" + moment(date).format('YYYY-MM-DD') })
                    .then((result) => {
                        this.$store.commit('updateData', result)
                        .then(response => {
                            this.$store.commit('updateDataLine');
                            this.$store.commit('updateDataPie');
                        })
                        this.tableData = this.updatedChartDataPie;
                    }, error => {
                        console.error(error);
                    });
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
                'dataFromBase'
            ]),
            chartDataLine () {
                return [ this.chartDataHeaderLine, ...this.updatedChartDataLine ]
            },
            chartDataPie () {
                return [ this.chartDataHeaderPie, ...this.updatedChartDataPie ]
            }
        },
        created () {
            axios({ method: "GET", "url": "http://localhost:52832/api/stats?date=" + moment(new Date()).format('YYYY-MM-DD') })
                    .then((result) => {
                        this.$store.commit('updateData', result)
                        .then(response => {
                            this.$store.commit('updateDataLine');
                            this.$store.commit('updateDataPie');
                        })
                        this.tableData = this.updatedChartDataPie;
                    }, error => {
                        console.error(error);
                    });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mb-20 {
        margin-bottom: 20px;
    }
</style>