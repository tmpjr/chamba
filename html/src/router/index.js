import Vue from 'vue' 
     
import Router from 'vue-router'
import Clients from '../components/Clients.vue'
import Dashboard from '../components/Dashboard.vue'
import Login from '../components/Login.vue'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  },{
    path: '/clients',
    name: 'clients',
    component: Clients,
    meta: {
      requiresAuth: true
    }
  },{
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },{
    path: '/',
    redirect: '/login'
  },{
    path: '*',
    redirect: '/login'
  }]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  
  if (requiresAuth && !currentUser) {
    next('login')
  } else if (!requiresAuth && currentUser) {
    next('dashboard')
  } else {
    next()
  }
})

export default router