import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/cliente',
    name: 'cliente',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cliente" */ '../views/ClienteView.vue')
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: () => import(/* webpackChunkName: "pastelero" */ '../views/PasteleroView.vue')

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router