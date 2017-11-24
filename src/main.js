import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

import 'bootstrap'

import './assets/styles/main.scss'

Vue.use(VueResource)

Vue.http.options.root = 'https://v-demo-98ab3.firebaseio.com'

new Vue({
  el: '#app',
  render: h => h(App)
})
