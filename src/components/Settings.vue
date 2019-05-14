<template>
    <div class="settings">
        <div class="option">
            <label>{{ changeNumberOfRates }}</label>
            <b-form-select v-model="changes.numberOfRates" :options="optionsNumberOFRates" class="col-xl-12"></b-form-select>
        </div>
        <div class="option">
            <label>{{ changeThanksText }}</label>
            <b-form-input v-model="changes.thanksMessage" class="col-xl-12"></b-form-input>
            <span v-if="showWarning" class="warning-message">Message need to be longer than 3 characters, and shorter than 120 characters!</span>
        </div>
        <div class="option">
            <label>{{ changeModalWait }}</label>
            <b-form-select v-model="changes.modalWait" :options="optionsModalWait" class="col-xl-12"></b-form-select>
        </div>
        <div class="right">
            <b-button @click="saveChanges">Save</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Settings',
        props: {
            changes: Object
        },
        data () {
            return {
                changeThanksText: `Thank you message:`,
                changeModalWait: `Thank you message timeout:`,
                changeNumberOfRates: `Number of emotions:`,
                showWarning: false,
                optionsNumberOFRates: [
                    { value: 3, text: '3' },
                    { value: 4, text: '4' },
                    { value: 5, text: '5' }
                ],
                optionsModalWait: [
                    { value: 0, text: '0' },
                    { value: 1, text: '1' },
                    { value: 2, text: '2' },
                    { value: 3, text: '3' },
                    { value: 4, text: '4' },
                    { value: 5, text: '5' },
                    { value: 6, text: '6' },
                    { value: 7, text: '7' },
                    { value: 8, text: '8' },
                    { value: 9, text: '9' },
                    { value: 10, text: '10' },
                ],
                inputRules: [
                    v => v.length >= 3 || 'Minimum length is 3 characters'
                ]
            }
        },
        methods: {
            saveChanges() {
                if(this.changes.thanksMessage.length <= 3 || this.changes.thanksMessage.length >= 120) {
                    this.showWarning = true;
                } else {
                    this.$emit('getChangedSettings', this.changes);
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .option {
        margin-bottom: 20px;
        text-align: left;
        font-size: 20px;
        font-weight: 400;
    }
    .right {
        text-align: right;
    }
    .warning-message {
        font-size: 14px;
        color: red;
    }
</style>