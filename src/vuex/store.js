import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 需要维护的状态
const state = {
    showSlider: true
}

const mutations = {
    GETSHOW (state) {
        state.showSlider = !state.showSlider
    }
}

export default new Vuex.Store({
    state,
    mutations
})
