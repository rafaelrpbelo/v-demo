import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import UserRegistrationForm from './components/UserRegistrationForm.vue'

export const routes = [
  { path: '', component: Home },
  { path: '/users/new', component: UserRegistrationForm }
]

export const router = new VueRouter({ routes, mode: 'history' })
