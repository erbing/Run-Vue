import Vue from 'vue'
// 引入 vuex
import store from './vuex/store'
import VueRouter from 'vue-router'
import Mains from './mains/mains'
import Start from './components/start'
import Tree from './tree/tree'
import Index from './components/index'
import About from './components/about'
// 引入基础 less

import './assets/less/base.less'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/tree',
        component: Tree
    },
    {
        path: '/start',
        component: Start
    },
    {
        path: '/about',
        component: About
    }
]

const router = new VueRouter({
    routes
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(Mains)
})
