import * as types from './mutation-types'

export default {
    [types.SHOW_SLIDER] (state) {
        state.showSlider = !state.showSlider
    }
}
