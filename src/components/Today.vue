<template>
    <div class="today">
        <div class="row">
            <div class="col-xl-5 text-div">
                <span class="text-title">Today is a new day. Check your ratings!</span>
                <div class="text-small-div">
                    <span class="text-small">Graphs presents you rating results. Today you have 255 rates, check it on dashboard.</span>
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
                    <div class="col-xl-12 line-chart-div-in"></div>
                </div>
                <div class="col-xl-3 pie-chart-div">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <v-data-table
                    :headers="headers"
                    :items="desserts"
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
                        <td class="text-xs-left">{{ props.item.calories }}</td>
                    </template>
                </v-data-table>
                <!-- <table class="table lm-30">
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
                </table> -->
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapState } from 'vuex';
    import axios from "axios";
    import moment from "moment";

    export default {
        name: 'Today',
        props: {
            settings: Object
        },
        data () {
            return {
                tableData: [],
                date: new Date(),
                headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          }
        ]
            }
        },
        methods: {
            // pullData() {
            //     axios({ method: "GET", "url": "http://localhost:52832/api/stats?date=" + moment(new Date()).format('YYYY-MM-DD') })
            //         .then((result) => {
            //             this.$store.commit('updateData', result)
            //             .then(response => {
            //                 this.$store.commit('updateDataLine');
            //                 this.$store.commit('updateDataPie');
            //             })
            //             this.tableData = this.updatedChartDataPie;
            //         }, error => {
            //             console.error(error);
            //         });
            // }
        },  
        computed: {
            // ...mapState([
            //     'chartOptionsLine',
            //     'chartDataHeaderLine',
            //     'updatedChartDataLine',
            //     'chartOptionsPie',
            //     'chartDataHeaderPie',
            //     'updatedChartDataPie',
            //     'dataFromBase'
            // ]),
            // chartDataLine () {
            //     return [ this.chartDataHeaderLine, ...this.updatedChartDataLine ]
            // },
            // chartDataPie () {
            //     return [ this.chartDataHeaderPie, ...this.updatedChartDataPie ]
            // }
        },
        created () {
            // axios({ method: "GET", "url": "http://localhost:52832/api/stats?date=" + moment(new Date()).format('YYYY-MM-DD') })
            //         .then((result) => {
            //             this.$store.commit('updateData', result)
            //             .then(response => {
            //                 this.$store.commit('updateDataLine');
            //                 this.$store.commit('updateDataPie');
            //             })
            //             this.tableData = this.updatedChartDataPie;
            //         }, error => {
            //             console.error(error);
            //         });
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
</style>