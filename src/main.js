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
// 引入左边 基础组件
import BaseLayout from './base/layout'
import BaseColor from './base/color'
import BaseTypography from './base/typography'
import BaseIcon from './base/icon'
import BaseButton from './base/button'
// 引入左边 表单组件
import BaseCheckbox from './from/checkbox'
import BaseRadio from './from/radio'
import BaseInput from './from/input'
import BasePassword from './from/password'
import BaseSearch from './from/search'
import BaseTextarea from './from/textarea'
import BaseSwitch from './from/switch'
import BaseSelect from './from/select'
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
        path: '/base',
        component: Use,
        children: [
            {path: 'layout', component: BaseLayout},
            {path: 'color', component: BaseColor},
            {path: 'typography', component: BaseTypography},
            {path: 'icon', component: BaseIcon},
            {path: 'button', component: BaseButton}
        ]
    },
    {
        path: '/from',
        component: Use,
        children: [
            {path: 'checkbox', component: BaseCheckbox},
            {path: 'radio', component: BaseRadio},
            {path: 'input', component: BaseInput},
            {path: 'password', component: BasePassword},
            {path: 'search', component: BaseSearch},
            {path: 'textarea', component: BaseTextarea},
            {path: 'switch', component: BaseSwitch},
            {path: 'select', component: BaseSelect}
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
    mode: 'history',
    base: __dirname,
    routes
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(Mains)
})
