import VueRouter from 'vue-router'
import Home from './components/Home.vue'

export const routes = [
  { path: '', component: Home }
]

export const router = new VueRouter({ routes })
