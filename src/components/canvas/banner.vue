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

    // console.log(resize.resizeFunc)
    export default {
        name: 'banner',
        data () {
            return {
                screenWidth: document.body.clientWidth - 256
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
        updated () {
            // const that = this
            // screenWidth () {
            //     window.onresize = (function () {
            //         that.screenWidth = document.body.clientWidth - 256
            //     })
            // }
            this.screenWidth = function (val) {
                console.log(val)
                window.onresize = (function () {
                    this.screenWidth = document.body.clientWidth - 256
                })()
            }
        },
        mounted () {
            const that = this
            that.init()
            window.onresize = (function () {
                that.screenWidth = document.body.clientWidth - 256
            })()
        }
    }
</script>

<style lang="less"></style>