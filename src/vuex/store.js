import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// 需要维护的状态
const state = {
    showSlider: true,
    title: '首页',
    canvasWidth: document.body.clientWidth - 256
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
