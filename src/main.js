// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCar, faSpinner  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

dom.watch()

Vue.use(BootstrapVue);

library.add(faUserSecret);
library.add(faCar);
library.add(faSpinner);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
