<template>
    <div class="start-page">
        <img src="./../assets/logo.png">
        <h1>{{ title }}</h1>
        <div class="row">
            <div class="col-xl-6 left">
                <b-button size="lg" class="btn-size" id="show-modal" @click="showRateModal"><i class="fas fa-check-circle"></i> Rate Us</b-button>
            </div>
            <div class="col-xl-6 right">
                <b-button size="lg" variant="success" class="btn-size" @click="showStatisticsModal"><i class="fas fa-chart-line"></i> Statistics</b-button>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12 settings">
                <b-button size="lg" @click="showSettingsModal"><i class="fas fa-cogs"></i> Setings</b-button>
            </div>
        </div>

        <b-modal ref="rate-modal" size="lg" hide-footer centered title="Rate Us">
            <rate-us :changes="settingsData" />
        </b-modal>

        <b-modal ref="settings-modal" size="lg" hide-footer centered title="Settings">
            <settings :changes="settingsData" v-on:getChangedSettings="settingsChanged" />
        </b-modal>
    </div>
</template>

<script>
    import RateUs from './RateUs.vue';
    import Statistics from './Statistics.vue';
    import Settings from './Settings.vue';
    import Router from './../router/index'

    export default {
        name: 'StartPage',
        data () {
            return {
                title: 'Welcome to our rate application!',
                settingsData: {
                    thanksMessage: `Thank you for helping us improve ourselves!`,
                    numberOfRates: 3,
                    modalWait: 5
                }
            }
        },
        methods: {
            showRateModal() {
                this.$refs['rate-modal'].show()
            },
            hideRateModal() {
                this.$refs['rate-modal'].hide()
            },
            showStatisticsModal() {
                //this.$refs['statistics-modal'].show()
                this.$router.push({name:'Statistics', params: {settings: this.settingsData}});
            },
            showSettingsModal() {
                this.$refs['settings-modal'].show()
            },
            settingsChanged(changes) {
                console.log("Izmjene: ", changes);
                this.settingsData = changes;
            }
        },
        components: {
            RateUs,
            Statistics,
            Settings
        }
    }
</script>

<style>
    h1, h2 {
        font-weight: normal;
    }

    .left {
        text-align: right;
    }

    .right {
        text-align: left;
    }

    .settings {
        text-align: center;
        margin-top: 40px;
    }

    .btn-size {
        font-size: 35px;
        margin-top: 10px;
    }

    @media (min-width: 1920px) {
        .modal-xl {
            max-width: 1835px;
        }
    }
    
</style>
