<template>
  <div class="start-page">
    <h1>{{ msg }}</h1>
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
        <b-button size="lg"><i class="fas fa-cogs"></i> Setings</b-button>
      </div>
    </div>

    <b-modal ref="rate-modal" size="lg" hide-footer title="Rate Us">
      <div class="d-block text-center">
        <h3>How do you like our work?</h3>
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
    </b-modal>

    <b-modal ref="message-modal" hide-footer title="Info" no-close-on-esc no-close-on-backdrop hide-header-close>
      <div class="d-block text-center">
        <h3>Thank you for helping us improve ourselves!</h3>
      </div>
    </b-modal>

    <b-modal ref="statistics-modal" size="xl" hide-footer title="Statistics">
      <div class="d-block text-center">
        <h3>Thank you for helping us improve ourselves!</h3>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  data () {
    return {
      msg: 'Welcome to our rate application!'
    }
  },
  methods: {
        showRateModal() {
          this.$refs['rate-modal'].show()
        },
        hideRateModal() {
          this.$refs['rate-modal'].hide()
        },
        clickRateSmile() {
          this.$refs['message-modal'].show()
          setTimeout(() => {
                this.$refs['message-modal'].hide()
            }, 5000);
        },
        showStatisticsModal() {
          this.$refs['statistics-modal'].show()
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
