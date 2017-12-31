import Vue from 'vue' 
     
import Router from 'vue-router'
import Clients from '../components/Clients.vue'
import Dashboard from '../components/Dashboard.vue'
import Login from '../components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  },{
    path: '/clients',
    name: 'clients',
    component: Clients
  },{
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },{
    path: '*',
    redirect: '/dashboard'
  }]
})


