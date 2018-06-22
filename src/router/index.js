import Vue from 'vue'
import Router from 'vue-router'
import signup from '@/components/signup'
import login from '@/components/login'
import dashboard from '@/components/dashboard'
import upload from '@/components/upload'
import VueLocalStorage from 'vue-localstorage'
import resume from '@/components/resume'
import demo from '@/components/demo'
import profile from '@/components/profile'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(VueLocalStorage)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signup',
      component: signup
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    }
  ]
})
