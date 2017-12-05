import VueRouter from 'vue-router'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const Home = () => import('./components/Home.vue')

const UserRegistrationForm = () => import('./components/UserRegistrationForm.vue')

// Set of products components
const ProductsRoot  = () => import(/* webpackChunkName: 'products' */ './components/ProductsRoot.vue')
const ProductsIndex = () => import(/* webpackChunkName: 'products' */ './components/products/ProductsIndex.vue')
const NewProduct    = () => import(/* webpackChunkName: 'products' */ './components/products/NewProduct.vue')
const EditProduct   = () => import(/* webpackChunkName: 'products' */ './components/products/EditProduct.vue')
const Product       = () => import(/* webpackChunkName: 'products' */ './components/products/Product.vue')

// Set of cars components
const CarsRoot = () => import('./components/CarsRoot.vue')

const defaultComponents = (component) => {
  return { default: component, header: Navbar, footer: Footer }
}

export const routes = [
  { path: '', components: defaultComponents(Home) },
  { path: '/users/new', components: defaultComponents(UserRegistrationForm) },
  { path: '/products', components: defaultComponents(ProductsRoot), children: [
    { path: '', component: ProductsIndex },
    { path: 'new', component: NewProduct },
    { path: ':id/edit', component: EditProduct },
    { path: ':id', component: Product }
  ]},
  { path: '/cars', components: defaultComponents(CarsRoot) }
]

export const router = new VueRouter({ routes, mode: 'history' })
