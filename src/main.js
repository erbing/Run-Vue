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

// import UseBase from './use/base'
// import UseDev from './use/dev'
// import UseResource from './use/resource'

// 个性定制路由
import CustomSkin from './customize/skin'
import CustomTheme from './customize/theme'

// 引入左边 基础组件
// import BaseLayout from './base/layout'
// import BaseColor from './base/color'
// import BaseTypography from './base/typography'
// import BaseIcon from './base/icon'
// import BaseButton from './base/button'
// import BaseTable from './base/table'

// 引入左边 表单组件
// import BaseCheckbox from './form/checkbox'
// import BaseRadio from './form/radio'
// import BaseInput from './form/input'
// import BaseInputNumber from './form/inputnumber'
// import BaseAutocomplete from './form/autocomplete'
// import BaseSearch from './form/search'
// import BaseTextarea from './form/textarea'
// import BaseSwitch from './form/switch'
// import BaseSelect from './form/select'

// 引入左边 功能组件
// import FuncModal from './func/modal'
// import FuncToast from './func/toast'
// import FuncSwipe from './func/swipe'
// import FuncPicker from './func/picker'
// import FuncProgress from './func/progress'
// import FuncBackTop from './func/backTop'
// import FuncLazyLoad from './func/lazyLoad'
// import FuncAutoheightTextarea from './func/autoheight-textarea.vue'

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
        component: resolve => require(['./use/base.vue'], resolve)
    }, {
        path: 'dev',
        component: resolve => require(['./use/dev.vue'], resolve)
    }, {
        path: 'resource',
        component: resolve => require(['./use/resource.vue'], resolve)
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
        component: resolve => require(['./base/layout.vue'], resolve)
    }, {
        path: 'color',
        component: resolve => require(['./base/color.vue'], resolve)
    }, {
        path: 'typography',
        component: resolve => require(['./base/typography.vue'], resolve)
    }, {
        path: 'icon',
        component: resolve => require(['./base/icon.vue'], resolve)
    }, {
        path: 'button',
        component: resolve => require(['./base/button.vue'], resolve)
    }, {
        path: 'table',
        component: resolve => require(['./base/table.vue'], resolve)
    }]
}, {
    path: '/form',
    component: Use,
    children: [{
        path: 'checkbox',
        component: resolve => require(['./form/checkbox.vue'], resolve)
    }, {
        path: 'radio',
        component: resolve => require(['./form/radio.vue'], resolve)
    }, {
        path: 'input',
        component: resolve => require(['./form/input.vue'], resolve)
    }, {
        path: 'inputNumber',
        component: resolve => require(['./form/inputNumber.vue'], resolve)
    }, {
        path: 'autocomplete',
        component: resolve => require(['./form/autocomplete.vue'], resolve)
    }, {
        path: 'search',
        component: resolve => require(['./form/search.vue'], resolve)
    }, {
        path: 'textarea',
        component: resolve => require(['./form/textarea.vue'], resolve)
    }, {
        path: 'switch',
        component: resolve => require(['./form/switch.vue'], resolve)
    }, {
        path: 'select',
        component: resolve => require(['./form/select.vue'], resolve)
    }]
}, {
    path: '/func',
    component: Use,
    children: [{
        path: 'swipe',
        component: resolve => require(['./func/swipe.vue'], resolve)
    }, {
        path: 'picker',
        component: resolve => require(['./func/picker.vue'], resolve)
    }, {
        path: 'datePicker',
        component: resolve => require(['./func/picker.vue'], resolve)
    }, {
        path: 'toast',
        component: resolve => require(['./func/toast.vue'], resolve)
    }, {
        path: 'modal',
        component: resolve => require(['./func/modal.vue'], resolve)
    }, {
        path: 'progress',
        component: resolve => require(['./func/progress.vue'], resolve)
    }, {
        path: 'backTop',
        component: resolve => require(['./func/backTop.vue'], resolve)
    }, {
        path: 'lazyLoad',
        component: resolve => require(['./func/lazyLoad.vue'], resolve)
    }, {
        path: 'autoheightTextarea',
        component: resolve => require(['./func/autoheight-textarea.vue'], resolve)
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
