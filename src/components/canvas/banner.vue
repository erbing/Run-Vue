<template>
    <div>
        <canvas id="dot" style="background:linear-gradient(to bottom, #58B7FF, #fff);">
            <p>your browser not support canvas</p>
        </canvas>
    </div>
</template>

<script>
    import Dot from '../../assets/dots/dot.js'
    // import resize from './getResize.js'

    // var screenWidth = document.body.clientWidth - 256
    // window.onresize = (function () {
    //     screenWidth = document.body.clientWidth - 256
    //     console.log(screenWidth)
    //     // return screenWidth
    // })()

    // const timmer = null

    // setTimeout(function () {
    //     window.onresize()
    // }, 500)

    export default {
        name: 'banner',
        data () {
            return {
                screenWidth: document.body.clientWidth - 256,
                timer: false
            }
        },
        methods: {
            init () {
                // const screenWidth = document.body.clientWidth - 256
                Dot('dot', {
                    cW: this.screenWidth,
                    cH: 300,
                    numDot: 150,
                    vxRange: 4,
                    vyRange: 2,
                    isTouch: true
                })
            }
        },
        watch: {
            screenWidth (val) {
                if (!this.timer) {
                    this.screenWidth = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        that.init()
                        that.timer = false
                    }, 400)
                }
            }
        },
        mounted () {
            const that = this
            that.init()

            this.screenWidth = document.body.clientWidth - 256
            window.onresize = function () {
                // let that = this
                return (() => {
                    window.screenWidth = document.body.clientWidth - 256
                    that.screenWidth = window.screenWidth
                })()
            }
        }
    }
</script>

<style lang="less"></style>