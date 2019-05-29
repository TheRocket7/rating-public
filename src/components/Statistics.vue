<template>
    <div class="statistics">
        <v-layout fill-height>
            <v-navigation-drawer
            dark
            mini-variant
            stateless
            value="true"
            >
                <v-toolbar flat class="transparent">
                    <v-list class="pa-0">
                        <v-list-tile avatar>
                            <v-list-tile-avatar>
                                <img src="https://randomuser.me/api/portraits/men/85.jpg">
                            </v-list-tile-avatar>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
        
                <v-list class="pt-0" dense>
                    <v-divider></v-divider>
                    <v-list-tile @click="show = 'Today'">
                        <v-list-tile-action>
                            <v-icon style="padding-right: 14px">dashboard</v-icon>
                            <div style="padding-right: 7px">Today</div>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile @click="show = 'Reports'">
                        <v-list-tile-action>
                            <v-icon style="padding-right: 14px">question_answer</v-icon>
                            <div style="padding-right: 2px">Reports</div>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile class="settings-padding">
                        <v-list-tile-action>
                            <v-icon style="padding-right: 14px">settings</v-icon>
                            <div style="padding-right: 1px">Settings</div>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-content>
                <v-container class="tab-content" v-if="show == 'Today'">
                    <today />
                </v-container>
                <v-container class="tab-content" v-else-if="show == 'Reports'">
                    <report />
                </v-container>
            </v-content>
            <v-navigation-drawer
            dark
            mini-variant
            stateless
            value="true"
            right
            absolute
            >
                <v-toolbar flat class="transparent">
                    <v-list class="pa-0">
                        <v-list-tile avatar>
                            <v-list-tile-avatar>
                                <img src="https://randomuser.me/api/portraits/men/85.jpg">
                            </v-list-tile-avatar>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
            </v-navigation-drawer>
        </v-layout>
        <!-- <div class="text-left back-button">
            <b-button size="lg" @click="goBack"><i class="fas fa-arrow-left"></i> Back</b-button>
        </div>
        <div class="d-block text-center title-margin">
            <h3>{{ title }}</h3>
        </div>
        <div class="col-xl-12 tabs-margin">
            <b-tabs content-class="mt-3">
                <b-tab title="Today" active @click="updateTodayCharts">
                    <today :settings="settings" ref="today" />
                </b-tab>
                <b-tab title="Report" @click="updateReportCharts">
                    <report :settings="settings" ref="report" />
                </b-tab>
            </b-tabs>
        </div> -->
    </div>
</template>

<script>
    import Report from './Report.vue'
    import Today from './Today.vue'

    export default {
        name: 'Statistics',
        props: {
            settings: Object
        },
        data () {
            return {
                title: `We follow all rates and here is statistic about that! :D`,
                show: "Today"
            }
        },
        components: {
            Report,
            Today
        },
        methods: {
            goBack() {
                this.$router.push({name:'Start page'});
            },
            updateTodayCharts() {
                this.$refs.today.pullData();
            },
            updateReportCharts() {
                this.$refs.report.pullData(new Date());
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .title-margin {
        margin-bottom: 65px;
    }
    .back-button {
        margin-left: 30px; 
    }
    .tabs-margin {
        margin-left: 15px !important;
        padding-right: 45px !important;
    }
    .settings-padding {
        margin-top: 59em;
        margin-bottom: 0.5em;
    }
    .tab-content {
        width: 100%;
        margin-left: 5px;
    }
    
</style>
