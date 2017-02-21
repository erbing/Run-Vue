// es6 polyfill
// import 'core-js/fn/array/find-index';
import uiIcon from './components/base/icon'

const runvue = {
    uiIcon
}

const install = function (Vue, opts = {}) {
    Object.keys(runvue).forEach((key) => {
        Vue.component(key, runvue[key])
    })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

// eslint-disable-line no-undef
module.exports = Object.assign(runvue, {install})
