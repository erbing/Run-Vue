import * as types from './mutation-types'

export default {
    [types.SHOW_SLIDER] (state) {
        state.showSlider = !state.showSlider
    },
    [types.CHANGE_CANVAS] (state) {         // 改变 canvas 宽度
        if (state.showSlider) {
            state.canvasWidth = document.body.clientWidth - 256
        } else {
            state.canvasWidth = document.body.clientWidth
        }
    }
}
