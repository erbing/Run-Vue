let screenWidth = document.body.clientWidth - 256

window.onresize = function () {
    screenWidth = document.body.clientWidth - 256
    return screenWidth
}

export default {window}

