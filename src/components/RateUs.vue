<template>
    <div class="rate-us">
        <div class="rate" v-if="!showMessage">
            <div class="logo-rate">
                <img src="./../assets/positive-vote.svg">
            </div>
            <div class="title-div">
                <h3 class="title-text">{{ title }}</h3>
            </div>
            <div class="row" v-if="settingsData.numberOfRates == 5">
                <div class="col-xl-1"></div>
                <div class="col-xl-2">
                    <button @click="clickRateSmile(1)" class="btn button-green btn-style"><img src="./../assets/great.svg"></button>
                </div>
                <div class="col-xl-2">
                    <button @click="clickRateSmile(2)" class="btn button-blue btn-style"><img src="./../assets/good.svg"></button>
                </div>
                <div class="col-xl-2">
                    <button @click="clickRateSmile(3)" class="btn button-grey btn-style"><img src="./../assets/meh.svg"></button>
                </div>
                <div class="col-xl-2">
                    <button @click="clickRateSmile(4)" class="btn button-orange btn-style"><img src="./../assets/bad.svg"></button>
                </div>
                <div class="col-xl-2">
                    <button @click="clickRateSmile(5)" class="btn button-red btn-style"><img src="./../assets/awfull.svg"></button>
                </div>
                <div class="col-xl-1"></div>
            </div>

            <div class="row" v-if="settingsData.numberOfRates == 4">
                <div class="col-xl-2"></div>
                <div class="col-xl-2">
                    <button @click="clickRateSmile(1)" class="btn button-green btn-style"><img src="./../assets/great.svg"></button>
                </div>
                <div class="col-xl-2">
                    <button @click="clickRateSmile(2)" class="btn button-blue btn-style"><img src="./../assets/good.svg"></button>
                </div>
                <div class="col-xl-2">
                    <button @click="clickRateSmile(3)" class="btn button-grey btn-style"><img src="./../assets/meh.svg"></button>
                </div>
                <div class="col-xl-2">
                    <button @click="clickRateSmile(5)" class="btn button-red btn-style"><img src="./../assets/awfull.svg"></button>
                </div>
                <div class="col-xl-2"></div>
            </div>

            <div class="row" v-if="settingsData.numberOfRates == 3">
                <div class="col-xl-3"></div>
                <div class="col-xl-2">
                    <button @click="clickRateSmile(1)" class="btn button-green btn-style"><img src="./../assets/great.svg"></button>
                </div>
                <div class="col-xl-2">
                    <button @click="clickRateSmile(3)" class="btn button-grey btn-style"><img src="./../assets/meh.svg"></button>
                </div>
                <div class="col-xl-2">
                    <button @click="clickRateSmile(5)" class="btn button-red btn-style"><img src="./../assets/awfull.svg"></button>
                </div>
                <div class="col-xl-3"></div>
            </div>
        </div>

        <div class="message" v-else>
            <div class="logo-message">
                <img src="./../assets/check.svg">
            </div>
            <div class="thanks-message-div">
                <h3 class="thanks-message">{{ settingsData.thanksMessage }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import moment from "moment";
    import {mapGetters, mapMutations} from 'vuex';
    import * as types from './../store/types';

    export default {
        name: 'RateUs',
        data () {
            return {
                title: `Rate our service!`,
                showMessage: false
            }
        },
        async mounted() {
            this.loadSettings();
        },
        methods: {
            ...mapMutations({
                loadSettings: types.LOAD_SETTINGS
            }),
            clickRateSmile(rateID) {
                console.log(rateID);
                let dateForBase = moment(new Date()).toDate();
                dateForBase.setMinutes(0);
                dateForBase.setSeconds(0);
                let dataToSend = {
                    RatingValueId: rateID, 
                    User: 'Tester', 
                    Date: dateForBase
                    };
                console.log(dataToSend);
                axios({ method: "POST", "url": "http://localhost:52832/api/ratings", data: dataToSend })
                    .then(result => {
                        console.log(result);
                        this.showMessage = true;
                        setTimeout(() => {
                            this.showMessage = false;
                        }, (this.settingsData.modalWait * 1000));
                    }, error => {
                        console.error(error);
                    });
            }
        },
        computed: {
            ...mapGetters({
                settingsData: types.SETTINGS_DATA
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .rate-us {
        margin-top: 17em;
    }
    .title-div {
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .title-text {
        color: #FFFFFF;
        font-family: Roboto;
        font-size: 32px;
        font-weight: 400;
        line-height: 38px;
        opacity: 0.699999988079071;
        text-align: center;
    }
    .message {
        margin-top: 11em;
    }
    .thanks-message-div {
        margin-top: 2em;
    }
    .thanks-message {
        color: #FFFFFF;
        font-family: Roboto;
        font-size: 32px;
        font-weight: 400;
        line-height: 38px;
        text-align: center;
    }
    .btn-style {
        font-size: 5em;
        margin-top: 10px;
        width: 2.7em;
        height: 2em;
        color: white;
        border-left-width: 7px;
    }
    .button-green {
        background: rgba(0, 168, 107, 0.1);
        border-left-color: #00A86B;
    }
    .button-blue {
        background: rgba(65, 179, 233, 0.1);
        border-left-color: #41B3E9;
    }
    .button-grey {
        background: rgba(122, 122, 122, 0.1);
        border-left-color: #7A7A7A;
    }
    .button-orange {
        background: rgba(255, 186, 19, 0.1);
        border-left-color: #FFBA13;
    }
    .button-red {
        background: rgba(249, 88, 90, 0.1);
        border-left-color: #F9585A;
    }
    .button-green:hover {
        background: rgba(0, 168, 107, 0.5);
    }
    .button-blue:hover {
        background: rgba(65, 179, 233, 0.5);
    }
    .button-grey:hover {
        background: rgba(122, 122, 122, 0.5);
    }
    .button-orange:hover {
        background: rgba(255, 186, 19, 0.5);
    }
    .button-red:hover {
        background: rgba(249, 88, 90, 0.5);
    }
</style>
