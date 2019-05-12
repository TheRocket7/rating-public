<template>
  <div class="start-page">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-xl-6 left">
        <b-button size="lg"><i class="fas fa-user-secret"></i> Rate Us</b-button>
      </div>
      <div class="col-xl-6 right">
        <b-button size="lg" variant="success"><i class="fas fa-chart-line"></i> Statistics</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  data () {
    return {
      msg: 'Welcome to our rate application!'
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
</style>
