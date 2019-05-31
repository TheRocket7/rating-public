<template>
    <div class="today">
        <div class="row">
            <div class="col-xl-5 text-div">
                <span class="text-title">Today is a new day. Check your ratings!</span>
                <div class="text-small-div">
                    <span class="text-small">Graphs presents you rating results. Today you have {{ allRates }} rates, check it on dashboard.</span>
                </div>
            </div>
            <div class="col-xl-7">
                <img class="oval" src="./../assets/Oval.svg">
                <img class="oval-copy" src="./../assets/Oval Copy.svg">
                <img class="artwork" src="./../assets/Artwork.svg">
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <div class="col-xl-9 line-chart-div">
                    <div class="col-xl-12 line-chart-div-in">
                        <div class="col-xl-12 chart-header">
                            <div class="col-xl-6 chart-title-div">
                                <span class="chart-area-title">Ratings</span>
                            </div>
                            <div class="col-xl-6 align-right">
                                <v-icon>more_vert</v-icon>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <line-chart
                                v-if="loaded"
                                :chartdata="chartDataLine"
                                :options="options"
                                :height="305"/>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 pie-chart-div">
                    <div class="col-xl-12 chart-header">
                        <div class="col-xl-6 chart-title-div">
                            <span class="chart-area-title">Ratings</span>
                        </div>
                        <div class="col-xl-6 align-right">
                            <v-icon>more_vert</v-icon>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <pie-chart
                            v-if="loaded"
                            :chartdata="chartDataPie"
                            :options="options"
                            :height="295"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <v-data-table
                    :headers="tableData.headers"
                    :items="tableData.rates"
                    class="elevation-1"
                    hide-actions
                >
                    <template slot="headerCell" slot-scope="props">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <span v-on="on">
                                    {{ props.header.text }}
                                </span>
                            </template>
                            <span>
                                {{ props.header.text }}
                            </span>
                        </v-tooltip>
                    </template>
                    <template v-slot:items="props">
                        <td class="text-xs-left">{{ props.item.name }}</td>
                        <td class="text-xs-left">{{ props.item.count }}</td>
                    </template>
                </v-data-table>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    import LineChart from './charts/LineChart';
    import PieChart from './charts/PieChart';
    import * as types from './../store/types';

    export default {
        name: 'Today',
        components: {
            LineChart,
            PieChart
        },
        data () {
            return {
                loaded: false
            }
        },
        async mounted() {
            this.loaded = false;
            this.pullData();
        },
        methods: {
            ...mapMutations ({
                fillData: types.MUTATE_UPDATE_DATA
            }),
            pullData() {
                this.fillData(new Date());
                setTimeout(() => {
                    this.loaded = true;
                }, 2000);
            }
        },  
        computed: {
            ...mapGetters({
                chartDataLine: types.LINE_CHART_DATA,
                chartDataPie: types.PIE_CHART_DATA,
                tableData: types.TABLE_DATA,
                options: types.OPTIONS,
                allRates: types.ALL_RATES
            }),
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .oval {
        margin-top: -25px;
        margin-left: -45px;
    }
    .oval-copy {
        margin-top: -580px;
        margin-left: -10px;
    }
    .artwork {
        margin-top: -755px;
        opacity: 0.8;
    }
    .text-div {
        text-align: left;
        padding-top: 20px;
        padding-left: 70px;
    }
    .text-title {
        color: #FFFFFF;
        font-family: Roboto;
        font-size: 48px;
        font-weight: 900;
        line-height: 58px;
        opacity: 0.699999988079071;
        width: 610px;
        text-align: left;
    }
    .text-small-div {
        margin-top: 30px;
    }
    .text-small {
        color: rgba(255, 255, 255, 0.6);
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
        width: 630px;
        text-align: left;
    }
    .line-chart-div {
        height: 350px;
        margin-top: -170px;
        margin-bottom: 20px;
        padding-left: 0px;
    }
    .line-chart-div-in {
        height: 350px;
        background: #424242;
        border-radius: 10px;
    }
    .pie-chart-div {
        height: 350px;
        background: #424242;
        margin-top: -370px;
        float: right;
        border-radius: 10px;
    }
    .align-right {
        text-align: right;
        padding-right: 0px;
    }
    .chart-header {
        padding-top: 15px;
        display: inline-flex;
    }
    .chart-title-div {
        text-align: left;
        padding-left: 0px;
    }
    .chart-area-title {
        color: rgba(255, 255, 255, 0.85);
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        width: 1221px;
        text-align: left;
    }
</style>