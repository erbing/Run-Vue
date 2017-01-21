let screenWidth = document.body.clientWidth - 256

const resizeFunc = function () {
    window.onresize = function () {
        screenWidth = document.body.clientWidth - 256
        return screenWidth
    }
}

export default {resizeFunc}

