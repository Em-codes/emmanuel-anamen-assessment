import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import JobDetails from '../views/JobDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/job-details/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return {top: 0}
  },
  base: process.env.BASE_URL,
  routes
})

export default router