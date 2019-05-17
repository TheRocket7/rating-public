// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faChartLine, faCogs, faGrin, faSmile, faMeh, faFrown, faSadTear, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueGoogleCharts from 'vue-google-charts'
import store from "./store";
import GAuth from 'vue-google-oauth2';

const gauthOption = {
  clientId: 'CLIENT_ID.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

dom.watch()

Vue.use(BootstrapVue, VueGoogleCharts, GAuth, gauthOption);

library.add(faCheckCircle, faChartLine, faCogs, faGrin, faSmile, faMeh, faFrown, faSadTear, faArrowLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
