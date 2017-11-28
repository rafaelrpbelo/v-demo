import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import UserRegistrationForm from './components/UserRegistrationForm.vue'

const defaultComponents = (component) => {
  return { default: component, header: Navbar, footer: Footer }
}

export const routes = [
  { path: '', components: defaultComponents(Home) },
  { path: '/users/new', components: defaultComponents(UserRegistrationForm) }
]

export const router = new VueRouter({ routes, mode: 'history' })
