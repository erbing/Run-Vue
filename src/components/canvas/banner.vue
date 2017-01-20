<template>
    <div>
        <canvas id="dot" style="background:linear-gradient(to bottom, #58B7FF, #fff);">
            <p>your browser not support canvas</p>
        </canvas>
    </div>
</template>

<script>
    import Dot from '../../assets/dots/dot.js'
    import resize from './getResize.js'

    console.log(resize)
    export default {
        name: 'banner',
        methods: {
            init () {
                const screenWidth = document.body.clientWidth - 256
                Dot('dot', {
                    cW: screenWidth,
                    cH: 300,
                    numDot: 150,
                    vxRange: 4,
                    vyRange: 2,
                    isTouch: true
                })
            }
        },
        mounted () {
            this.init()
            // window.onresize()
        }
    }
</script>

<style lang="less"></style>