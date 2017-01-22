<template>
    <div>
        <canvas id="dot" style="background:linear-gradient(to bottom, #58B7FF, #fff);" v-if="show">
            <p>your browser not support canvas</p>
        </canvas>
    </div>
</template>

<script>
    import Dot from '../../assets/dots/dot.js'

    export default {
        name: 'banner',
        data () {
            return {
                show: true,
                screenWidth: document.body.clientWidth - 256,
                timer: false
            }
        },
        methods: {
            init () {
                Dot('dot', {
                    cW: this.screenWidth,
                    cH: 300,
                    numDot: 150,
                    vxRange: 4,
                    vyRange: 2,
                    isTouch: true
                })
                this.show = true
            }
        },
        computed: {
            canvasWidth () {
                return this.$store.state.canvasWidth
            }
        },
        watch: {
            screenWidth (val) {
                if (!this.timer) {
                    this.screenWidth = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        // that.screenWidth = that.$store.state.canvasWidth
                        console.log(that.screenWidth)
                        that.init()
                        that.timer = false
                    }, 400)
                }
            },
            canvasWidth (val) {
                if (!this.timer) {
                    this.screenWidth = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        // that.screenWidth = that.$store.state.canvasWidth
                        console.log(that.screenWidth)
                        that.init()
                        that.timer = false
                    }, 100)
                }
            }
        },
        mounted () {
            const that = this
            that.init()

            this.screenWidth = document.body.clientWidth - 256
            window.onresize = function () {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    // if (that.$store.state.showSlider) {
                    //     window.screenWidth = document.body.clientWidth - 256
                    // } else {
                    //     window.screenWidth = document.body.clientWidth
                    // }
                    that.screenWidth = window.screenWidth - 256
                    console.log(that.screenWidth)
                })()
            }
        }
    }
</script>

<style lang="less"></style>