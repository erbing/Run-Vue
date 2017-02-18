<template>
    <div class="main-info" id="start">
    
        

        <h2>意见反馈</h2>
        <p class="mark-p">做得不好，需要不断吐槽才能进步。</p>

        <div class="codebox">
            <div class="codetitle">
                <span>吐槽  &nbsp;&nbsp;&nbsp;&nbsp;<i class="icon-good" :class=" isGood ? 'good' : '' " @click=" isGood = !isGood; isBad = false"></i>&nbsp;&nbsp; or &nbsp;&nbsp;<i class="icon-bad":class=" isBad ? 'bad' : '' " @click=" isBad = !isBad; isGood = false"></i></span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <iframe src="./feedback.html" style="width: 100%;min-height: 260px;" ref="myiframe" frameborder=0 scrolling=auto></iframe>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // changeFrameHeight()

    // window.onresize = function () {
    //     changeFrameHeight()
    // }
    import uiButton from '../components/base/button'
    import codeBlock from '../components/codeBlock'
    import markDown from '../components/markdown'
    import codeButton from '!raw!../components/func/backTop'
    import markCode from '../components/feedBack.md'

    import backTop from '../components/func/backTop'
    export default {
        name: 'start',
        components: {
            uiButton,
            codeBlock,
            markDown,
            uiBackTop: backTop
        },
        data () {
            return {
                isGood: false,
                isBad: false,
                codeButton,
                result: {
                    province: '',
                    city: '',
                    area: ''
                },
                show: false,
                content: '正在加载中...'
            }
        },
        computed: {
            markCode () {
                console.log(markCode.replace(/"/g, ''))
                return markCode.replace(/"/g, '')
            }
        },
        methods: {
            showToast () {
                console.log(12)
                this.visible = true
            },
            hide () {
                this.visible = !this.visible
            },
            handleAreaSelect (result) {
                console.log(result)
                this.show = false
                this.result = result
            }
        },
        mounted () {
            const el = this.$refs.myiframe
            console.log(el)
            el.height = document.documentElement.clientHeight
        }
    }
</script>

<style lang="less">
    .wrap{text-align: center;
        img{width: 100px;margin-top: 50px;}
    }
    .good {
        color: #FF5566;
    }
    .bad {
        color: #44bb22;
    }
</style>