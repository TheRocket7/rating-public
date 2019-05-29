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
import store from "./store/store";
import GAuth from 'vue-google-oauth2'
import Vuetify from 'vuetify'

const gauthOption = {
  clientId: '243430777574-dkmhg209s5qhuj6r3uv6j2pelnfdjvg9.apps.googleusercontent.com',
  scope: 'openid%20email%20profile',
  prompt: 'select_account'
}

dom.watch()

Vue.use(Vuetify, BootstrapVue, GAuth, gauthOption);

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
