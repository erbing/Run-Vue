<template>
    <div class="main-info" id="start">
    
        

        <h2>progress 进度条</h2>
        <p class="mark-p">功能组件，在 上传文件，项目进度 图标显示 时使用。</p>

        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>

            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">基础的 Picker 用法。</span>
                        <uiProgress :percent="100" status="success"></uiProgress>
                        <uiProgress :percent="75" status="wrong"></uiProgress>
                        <uiProgress :percent="50"></uiProgress>
                        <uiProgress :percent="25"></uiProgress>
                </div>
            </div>
        </div>

        <h2>Code</h2>
        <p class="mark-p">组件实现的代码 （ 其中包括了 html、less、js ） </p>
        <div class="codebox">
            <div class="codetitle">
                <span>Code</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <codeBlock :code="codeButton"></codeBlock>
                </div>
            </div>
        </div>

        <h2>API</h2>
        <p class="mark-p">我们提供了基本的API ( 里面主要包括了 props、 slot、 event ) </p>
        <table class="api-table">
            <thead>
                <tr>
                    <td>属性</td>
                    <td>说明</td>
                    <td>类型</td>
                    <td>可选值</td>
                    <td>默认值</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>size</td>
                    <td>按钮尺寸：大、正常、小</td>
                    <td>String</td>
                    <td>large、small</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>按钮类型</td>
                    <td>String</td>
                    <td>default、primary、info、success、warning、danger、text</td>
                    <td>default</td>
                </tr>
                <tr>
                    <td>hollow</td>
                    <td>是否为镂空样式</td>
                    <td>Boolean</td>
                    <td>——</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>loading</td>
                    <td>是否加载中</td>
                    <td>Boolean</td>
                    <td>——</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>Boolean</td>
                    <td>——</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>图标，请查看icon组件里面已有图标名，图标默认在文字左边</td>
                    <td>String</td>
                    <td>......</td>
                    <td>——</td>
                </tr>
                <tr>
                    <td>nativeType</td>
                    <td>原生 type 属性</td>
                    <td>String</td>
                    <td>button,submit,reset</td>
                    <td>button</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>

<script>
    import uiButton from '../components/base/button'
    import codeBlock from '../components/codeBlock'
    import codeButton from '!raw!../components/func/progress'

    import progress from '../components/func/progress'
    export default {
        name: 'start',
        components: {
            uiButton,
            codeBlock,
            uiProgress: progress
        },
        data () {
            return {
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
        }
    }
</script>

<style lang="less">
    .wrap{text-align: center;
        img{width: 100px;margin-top: 50px;}
    }
</style>