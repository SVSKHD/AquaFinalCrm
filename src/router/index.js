import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Invoice from "../views/invoices/invoices.vue"
import Transit from "../views/Transit/Transit.vue"
//layout
import Layout from "../AquaLayout/Layout"


const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path:"/invoices",
        name:"Invoice",
        component:Invoice
      },
      {
        path:"/transit",
        name:"Transit",
        component:Transit
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
