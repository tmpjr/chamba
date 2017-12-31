import Vue from 'vue'

import Router from 'vue-router'
import Clients from '../components/Clients.vue'
import Dashboard from '../components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [{
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


