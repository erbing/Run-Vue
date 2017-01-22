import * as types from './mutation-types'

export default {
    getShow ({ commit }) {
        commit(types.SHOW_SLIDER)
    },
    changCanvas ({ commit }) {
        commit(types.CHANGE_CANVAS)
    }
}

