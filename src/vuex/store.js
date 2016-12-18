import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 需要维护的状态
const state = {
    showSlider: true
}

const mutations = {
    // 初始化 state
    SHOW (state, data) {
        state.showSlider = data.showSlider
    }
}

export default new Vuex.Store({
    state,
    mutations
})
