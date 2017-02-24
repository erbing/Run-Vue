// es6 polyfill

// 基础组件
import uiIcon from './components/base/icon'
import uiButton from './components/base/button'
import uiCol from './components/base/col'
import uiRow from './components/base/row'
import uiTable from './components/base/table'
// 表单组件
import uiCheckbox from './components/form/checkbox'
import uiRadio from './components/form/radio'
import uiInput from './components/form/input'
import uiInputNumber from './components/form/inputnumber'
import uiAutoComplete from './components/form/autocomplete'
import uiSearch from './components/form/search'
import uiTextarea from './components/form/textarea'
import uiSwitch from './components/form/switch'
import uiSelect from './components/form/select'
// 功能组件
import uiSwipe from './components/func/swipe'
import uiPicker from './components/func/picker'
import uiToast from './components/func/toast'
import uiModal from './components/func/modal'
import uiProgress from './components/func/progress'
import uiBackTop from './components/func/backTop'

const runvue = {
    uiIcon,
    uiButton,
    uiCol,
    uiRow,
    uiTable,
    uiCheckbox,
    uiRadio,
    uiInput,
    uiInputNumber,
    uiAutoComplete,
    uiSearch,
    uiTextarea,
    uiSwitch,
    uiSelect,
    uiSwipe,
    uiPicker,
    uiToast,
    uiModal,
    uiProgress,
    uiBackTop
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
