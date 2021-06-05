import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SideMenu from '../views/SideMenu.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Collateral from '../views/Collateral.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children : [
      { path: ':id', component: HelloWorld }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sidemenu',
    name: 'SideMenu',
    component: SideMenu
  },
  {
    path: '/collateral',
    name: 'Collateral',
    component: Collateral
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
