import Vue from 'vue'
// 引入基础 less
import './assets/less/normalize.less'
import './assets/less/base.less'
// 引入 vuex
import store from './vuex/store'
import VueRouter from 'vue-router'
import Mains from './mains/mains'

import Index from './components/index'
import About from './components/about'

// 引入左边 如何使用 相关组件
import Use from './use/use'
import UseStart from './use/start'
import UseBase from './use/base'
import UseDev from './use/dev'
import UseResource from './use/resource'
// 个性定制路由
import CustomSkin from './customize/skin'
import CustomTheme from './customize/theme'
// 引入左边 基础组件
import BaseLayout from './base/layout'
import BaseColor from './base/color'
import BaseTypography from './base/typography'
import BaseIcon from './base/icon'
import BaseButton from './base/button'
// 引入左边 表单组件
import BaseCheckbox from './form/checkbox'
import BaseRadio from './form/radio'
import BaseInput from './form/input'
import BasePassword from './form/password'
import BaseSearch from './form/search'
import BaseTextarea from './form/textarea'
import BaseSwitch from './form/switch'
import BaseSelect from './form/select'
// 引入左边 功能组件
import FuncModal from './func/modal'
import FuncToast from './func/toast'
import FuncSwipe from './func/swipe'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Index
}, {
    path: '/use',               // 如何使用
    component: Use,
    children: [{
        path: 'start',
        component: Index
    }, {
        path: 'base',
        component: UseBase
    }, {
        path: 'dev',
        component: UseDev
    }, {
        path: 'resource',
        component: UseResource
    }]
}, {
    path: '/customize',               // 个性定制
    component: Use,
    children: [{
        path: 'skin',
        component: CustomSkin
    }, {
        path: 'theme',
        component: CustomTheme
    }]
}, {
    path: '/base',
    component: Use,
    children: [{
        path: 'layout',
        component: BaseLayout
    }, {
        path: 'color',
        component: BaseColor
    }, {
        path: 'typography',
        component: BaseTypography
    }, {
        path: 'icon',
        component: BaseIcon
    }, {
        path: 'button',
        component: BaseButton
    }]
}, {
    path: '/from',
    component: Use,
    children: [{
        path: 'checkbox',
        component: BaseCheckbox
    }, {
        path: 'radio',
        component: BaseRadio
    }, {
        path: 'input',
        component: BaseInput
    }, {
        path: 'password',
        component: BasePassword
    }, {
        path: 'search',
        component: BaseSearch
    }, {
        path: 'textarea',
        component: BaseTextarea
    }, {
        path: 'switch',
        component: BaseSwitch
    }, {
        path: 'select',
        component: BaseSelect
    }]
}, {
    path: '/func',
    component: Use,
    children: [{
        path: 'table',
        component: BaseCheckbox
    }, {
        path: 'swipe',
        component: FuncSwipe
    }, {
        path: 'datePicker',
        component: BaseInput
    }, {
        path: 'toast',
        component: FuncToast
    }, {
        path: 'modal',
        component: FuncModal
    }, {
        path: 'progress',
        component: BaseTextarea
    }, {
        path: 'backTop',
        component: BaseSwitch
    }, {
        path: 'lazyLoad',
        component: BaseSelect
    }]
}, {
    path: '/about',
    component: Use,
    children: [{
        path: 'dev',
        component: About
    }, {
        path: 'feedback',
        component: About
    }]
}, {
    path: '/useStart',
    component: UseStart
}]

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
