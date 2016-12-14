import Vue from 'vue'
import VueRouter from 'vue-router'
import Mains from './mains/mains'
import Hello from './components/Hello'
import Index from './components/index'
// 引入基础 less
import './assets/less/base.less'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Index
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
    ...Mains
})
