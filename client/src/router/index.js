import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import BugDetails from '../views/BugDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/bugs/:id',
    name: 'bugDetails',
    component: BugDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
