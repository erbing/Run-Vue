import Vue from 'vue'
// 引入 vuex
import store from './vuex/store'
import VueRouter from 'vue-router'
import Mains from './mains/mains'
import Start from './components/start'
import Tree from './tree/tree'
import Index from './components/index'
import About from './components/about'
import ShowSlide from './showSlide/showSlide'
// 引入左边 如何使用 相关组件
import Use from './use/use'
import UseStart from './use/start'
import UseBase from './use/base'
import UseResource from './use/resource'
// 引入基础 less
import './assets/less/base.less'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/use',
        component: Use,
        children: [
            {path: 'start', component: UseStart},
            {path: 'base', component: UseBase},
            {path: 'resource', component: UseResource}
        ]
    },
    {
        path: '/tree',
        component: Tree
    },
    {
        path: '/showSlide',
        component: ShowSlide
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
    // mode: 'history',
    // base: __dirname,
    routes
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(Mains)
})
