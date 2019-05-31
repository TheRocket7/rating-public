<template>
    <div class="report">
        <div>
            <v-flex xs12 sm6 md4>
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="date"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                            v-model="date"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                        >
                        </v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="pullData(date)">OK</v-btn>
                    </v-date-picker>
                </v-menu>
            </v-flex>
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
    import { mapMutations, mapGetters } from 'vuex'
    import LineChart from './charts/LineChart';
    import PieChart from './charts/PieChart';
    import * as types from './../store/types';

    export default {
        name: 'Report',
        data () {
            return {
                date: new Date().toISOString().substr(0, 10),
                menu: false,
                loaded: false
            }
        },
        components: {
            LineChart,
            PieChart
        },
        async mounted() {
            this.pullData(new Date());
        },
        methods: {
            ...mapMutations ({
                fillData: types.MUTATE_UPDATE_DATA
            }),
            pullData(date) {
                this.loaded = false;
                this.fillData(date);
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
    .line-chart-div {
        height: 350px;
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