<template>
    <div class="statistics">
        <div class="d-block text-center">
            <h3>{{ title }}</h3>
        </div>
        <div class="small">
            <line-chart :chart-data="datacollection"></line-chart>
            <button @click="fillData()">Randomize</button>
        </div>
    </div>
</template>

<script>
    import LineChart from './LineChart.js'

    export default {
        name: 'Statistics',
        data () {
            return {
                title: `We follow all rates and here is statistic about that! :D`,
                datacollection: {}
            }
        },
        components: {
            LineChart
        },
        methods: {
            fillData () {
                this.datacollection = {
                labels: [this.getRandomInt(), this.getRandomInt()],
                datasets: [
                    {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [this.getRandomInt(), this.getRandomInt()]
                    }, {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [this.getRandomInt(), this.getRandomInt()]
                    }
                ]
                }
            },
            getRandomInt () {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .small {
        max-width: 600px;
        margin:  150px auto;
    }
</style>
