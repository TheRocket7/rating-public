<template>
    <div class="statistics">
        <div class="text-left back-button">
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
        </div>
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
                title: `We follow all rates and here is statistic about that! :D`
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
                this.$refs.today.pullData(new Date());
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
</style>
