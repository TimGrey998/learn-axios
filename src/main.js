import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 2000

new Vue({
  render: h => h(App),
}).$mount('#app')
