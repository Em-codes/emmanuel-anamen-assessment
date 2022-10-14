import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store/index'
import './assets/css/app.css'

import jobService from './services/jobs'

import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

Vue.use(VueToast, {
  position: "top-right",
  duration: 3000,
  dismissible: true,
});

Vue.prototype.$jobService = jobService;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
