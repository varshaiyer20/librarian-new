import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "" */ '../views/Login.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import(/* webpackChunkName: "" */ '../views/Books.vue')
  },
  {
    path: '/authors',
    name: 'authors',
    component: () => import(/* webpackChunkName: "" */ '../views/Authors.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import(/* webpackChunkName: "" */ '../views/Categories.vue')
  },
  {
    path: '/issuedbooks',
    name: 'issuedbooks',
    component: () => import(/* webpackChunkName: "" */ '../views/IssuedBooks.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: () => import(/* webpackChunkName: "" */ '../views/Members.vue')
  },
  {
    path: '/staff',
    name: 'staff',
    component: () => import(/* webpackChunkName: "" */ '../views/Staff.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
