<template>
    <div class="rate-us">
        <div class="d-block text-center">
            <h3>{{ title }}</h3>
        </div>
        <div class="row">
            <div class="col-xl-1"></div>
            <div class="col-xl-2">
                <b-button size="lg" @click="clickRateSmile" variant="success" class="btn-size"><i class="fas fa-grin"></i></b-button>
            </div>
            <div class="col-xl-2">
                <b-button size="lg" @click="clickRateSmile" class="btn-size"><i class="fas fa-smile"></i></b-button>
            </div>
            <div class="col-xl-2">
                <b-button size="lg" @click="clickRateSmile" variant="warning" class="btn-size"><i class="fas fa-meh"></i></b-button>
            </div>
            <div class="col-xl-2">
                <b-button size="lg" @click="clickRateSmile" class="btn-size"><i class="fas fa-frown"></i></b-button>
            </div>
            <div class="col-xl-2">
                <b-button size="lg" @click="clickRateSmile" variant="danger" class="btn-size"><i class="fas fa-sad-tear"></i></b-button>
            </div>
            <div class="col-xl-1"></div>
        </div>

        <b-modal ref="message-modal" hide-footer title="Info" no-close-on-esc no-close-on-backdrop hide-header-close>
        <div class="d-block text-center">
            <h3>{{ thankYouMessage }}</h3>
        </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'RateUs',
        data () {
            return {
                title: `How do you like our work?`,
                waitCloseModal: 5000,
                thankYouMessage: `Thank you for helping us improve ourselves!` 
            }
        },
        methods: {
            clickRateSmile() {
                this.$refs['message-modal'].show()
                setTimeout(() => {
                    this.$refs['message-modal'].hide()
                }, waitCloseModal);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn-size {
    font-size: 35px;
    margin-top: 10px;
    }
</style>
