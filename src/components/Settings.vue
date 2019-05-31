<template>
    <div class="settings">
        <div class="row">
            <div class="col-xl-3"></div>
            <div class="col-xl-6 mt-75">
                <div class="row">
                    <div class="col-xl-6 title-div">
                        <span class="title">{{ title }}</span>
                    </div>
                    <div class="col-xl-6 iks">
                        <v-icon @click="back()">close</v-icon>
                    </div>
                </div>
                <hr class="line"/>
                <v-form v-model="valid">
                    <v-container>
                        <v-layout>
                            <div class="col-xl-12">
                                <div class="row">
                                    <div class="col-xl-6">
                                        <v-flex
                                            xs12
                                            xl12
                                            class="preview-div"
                                            >
                                            <label class="preview-label">Emotions preview</label>
                                            <div class="col-xl-12 emotions-div" v-if="settingsData.numberOfRates = 5">
                                                <img class="emotions" src="./../assets/great.svg">
                                                <img class="emotions" src="./../assets/good.svg">
                                                <img class="emotions" src="./../assets/meh.svg">
                                                <img class="emotions" src="./../assets/bad.svg">
                                                <img class="emotions" src="./../assets/awfull.svg">
                                            </div>
                                            <div class="col-xl-12 emotions-div" v-else-if="settingsData.numberOfRates = 4">
                                                <img class="emotions" src="./../assets/great.svg">
                                                <img class="emotions" src="./../assets/good.svg">
                                                <img class="emotions" src="./../assets/meh.svg">
                                                <img class="emotions" src="./../assets/awfull.svg">
                                            </div>
                                            <div class="col-xl-12 emotions-div" v-else-if="settingsData.numberOfRates = 3">
                                                <img class="emotions" src="./../assets/great.svg">
                                                <img class="emotions" src="./../assets/meh.svg">
                                                <img class="emotions" src="./../assets/awfull.svg">
                                            </div>
                                        </v-flex>
                                        <v-flex
                                            xs12
                                            xl12
                                            >
                                            <v-text-field
                                                v-model="settingsData.numberOfRates"
                                                :rules="numberOfRatesRules"
                                                :label="changeNumberOfRates"
                                                required
                                                type="number"
                                                @blur="saveChanges()"
                                                @change="updateNumberOfEmotions($event)"
                                            ></v-text-field>
                                        </v-flex>
                                    </div>
                                    <div class="col-xl-6">
                                        <v-flex
                                            xs12
                                            xl12
                                            >
                                            <v-text-field
                                                v-model="settingsData.thanksMessage"
                                                :rules="messageTextRules"
                                                :counter="120"
                                                :label="changeThanksText"
                                                @blur="saveChanges(), updateTextMessage($event)"
                                            ></v-text-field>
                                        </v-flex>

                                        <v-flex
                                            xs12
                                            xl12
                                            >
                                            <v-text-field
                                                v-model="settingsData.modalWait"
                                                :rules="timeoutRules"
                                                :label="changeModalWait"
                                                required
                                                type="number"
                                                @blur="saveChanges()"
                                                @change="updateMessageTimeout($event)"
                                            ></v-text-field>
                                        </v-flex>
                                    </div>
                                </div>
                            </div>
                        </v-layout>
                    </v-container>
                </v-form>
            </div>
            <div class="col-xl-3"></div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import * as types from './../store/types';

    export default {
        name: 'Settings',
        data () {
            return {
                title: `Settings`,
                changeThanksText: `Thank you message`,
                changeModalWait: `Message timeout`,
                changeNumberOfRates: `Number of emotions`,
                valid: false
            }
        },
        async mounted() {
            this.loadSettings();
        },
        methods: {
            ...mapMutations({
                saveSettingsChanges: types.SAVE_SETTINGS,
                updateEmotions: types.UPDATE_NUMBER_OF_RATES,
                updateMessage: types.UPDATE_TEXT_MESSAGE,
                updateTimeout: types.UPDATE_TIMEOUT,
                loadSettings: types.LOAD_SETTINGS
            }),
            //Save settings in base
            saveChanges() {
                if(this.valid) {
                    this.saveSettingsChanges();
                } else {
                    console.log("Nije validan");
                }
            },
            //Update number of emotions in aplication
            updateNumberOfEmotions(event) {
                console.log(this.settingsData);
                if(this.valid) {
                    this.updateEmotions(event);
                } else {
                    console.log("Nije validan");
                }
            },
            //Update text message in aplication
            updateTextMessage(event) {
                console.log(event);
                if(this.valid) {
                    this.updateTextMessage(event);
                } else {
                    console.log("Nije validan");
                }
            },
            //Update timeout in aplication
            updateMessageTimeout(event) {
                console.log(event);
                if(this.valid) {
                    this.updateTimeout(event);
                } else {
                    console.log("Nije validan");
                }
            },
            //Click action on "X"
            back() {
                this.$router.push({name:'Statistics'});
            }
        },
        computed: {
            ...mapGetters({
                settingsData: types.SETTINGS_DATA,
                numberOfRatesRules: types.VALIDATION_RULES_NUMBER_OF_RATINGS,
                messageTextRules: types.VALIDATION_RULES_MESSAGE_TEXT,
                timeoutRules: types.VALIDATION_RULES_TIMEOUT
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mt-75 {
        margin-top: 75px;
    }
    .title-div {
        text-align: left;
        padding-left: 100px;
    }
    .title {
        color: rgba(255, 255, 255, 0.85);
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
        text-align: left;
    }
    .iks {
        text-align: right;
    }
    .line {
        border-width: 2px;
        background: rgba(255, 255, 255, 0.85);
    }
    .preview-div {
        text-align: left;
    }
    .preview-label {
        font-size: 12px;
        color: hsla(0,0%,100%,.7);
    }
    .emotions-div {
        padding-left: 0px;
        margin-bottom: 20px;
    }
    .emotions {
        height: 25px;
    }
    .option {
        margin-bottom: 20px;
        text-align: left;
        font-size: 20px;
        font-weight: 400;
    }
    
</style>