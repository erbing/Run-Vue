import Vue from 'vue'
// 引入基础 less
import './assets/less/normalize.less'
import './assets/less/base.less'
// 引入 vuex
import store from './vuex/store'
import VueRouter from 'vue-router'
import Mains from './mains/mains'

import Index from './components/index'
// 引入 关于开发者
import AboutDev from './about/dev'
import AboutFeedback from './about/feedback'
// 引入 关于项目版本以及进度
import PmVersion from './pm/version'
import PmPercent from './pm/percent'
// 引入左边 如何使用 相关组件
import Use from './use/use'
// import UseStart from './use/start'
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
import BaseTable from './base/table'
// 引入左边 表单组件
import BaseCheckbox from './form/checkbox'
import BaseRadio from './form/radio'
import BaseInput from './form/input'
import BaseInputNumber from './form/inputnumber'
import BaseAutocomplete from './form/autocomplete'
import BaseSearch from './form/search'
import BaseTextarea from './form/textarea'
import BaseSwitch from './form/switch'
import BaseSelect from './form/select'
// 引入左边 功能组件
import FuncModal from './func/modal'
import FuncToast from './func/toast'
import FuncSwipe from './func/swipe'
import FuncPicker from './func/picker'
import FuncProgress from './func/progress'
import FuncBackTop from './func/backTop'
import FuncLazyLoad from './func/lazyLoad'
import FuncAutoheightTextarea from './func/autoheight-textarea.vue'

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
    }, {
        path: 'table',
        component: BaseTable
    }]
}, {
    path: '/form',
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
        path: 'inputNumber',
        component: BaseInputNumber
    }, {
        path: 'autocomplete',
        component: BaseAutocomplete
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
        path: 'swipe',
        component: FuncSwipe
    }, {
        path: 'picker',
        component: FuncPicker
    }, {
        path: 'datePicker',
        component: FuncPicker
    }, {
        path: 'toast',
        component: FuncToast
    }, {
        path: 'modal',
        component: FuncModal
    }, {
        path: 'progress',
        component: FuncProgress
    }, {
        path: 'backTop',
        component: FuncBackTop
    }, {
        path: 'lazyLoad',
        component: FuncLazyLoad
    }, {
        path: 'autoheightTextarea',
        component: FuncAutoheightTextarea
    }]
}, {
    path: '/plugins',
    component: Use,
    children: [{
        path: 'ticks',
        component: AboutDev
    }]
}, {
    path: '/about',
    component: Use,
    children: [{
        path: 'dev',
        component: AboutDev
    }, {
        path: 'feedback',
        component: AboutFeedback
    }]
}, {
    path: '/pm',
    component: Use,
    children: [{
        path: 'version',
        component: PmVersion
    }, {
        path: 'percent',
        component: PmPercent
    }]
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
