import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import { router } from './router'

import 'bootstrap'

import './assets/styles/main.scss'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://v-demo-98ab3.firebaseio.com'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
