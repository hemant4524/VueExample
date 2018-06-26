import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import About from '@/components/About'
import Coins from '@/components/Coins'
import auth from '@/auth'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    },
    { path: '/login', component: Login },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
