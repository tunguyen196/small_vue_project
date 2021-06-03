import Vue from 'vue'
import App from './App.vue'
//import vue

import VueRouter from 'vue-router'

import 'bootstrap' // ←

import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Dashboard from './components/Dashboard.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/dashboard', component: Dashboard, name: 'account' },
  { path: '/home', component: Home, name: 'home' },

]

const router = new VueRouter({
  mode:'history',
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
