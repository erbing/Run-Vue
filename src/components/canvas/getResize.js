let screenWidth = document.body.clientWidth - 256

const resizeFunc = function () {
    window.onresize = function () {
        screenWidth = document.body.clientWidth - 256
        return screenWidth
    }
}

<<<<<<< HEAD
const onresize = window.onresize()
=======
export default {resizeFunc}
>>>>>>> d4a9bab5492a80913eed7312ae1864491db51988

export default onresize
