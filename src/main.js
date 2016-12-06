import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Home from './components/Home'
import Hello from './components/Hello'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: App
    },
    {
        path: '/hello',
        component: Hello
    }
]

const router = new VueRouter({
    routes
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    ...App
})
