import { createRouter,createWebHistory } from "vue-router";

import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: vCatalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: vCart,
    props: true
  }
]



const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;