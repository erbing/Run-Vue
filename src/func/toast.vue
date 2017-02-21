<template>
    <div class="main-info" id="start">

        <toast :visible="visible" :content="content" :type="type" @hideToast=" visible = false "></toast>

        <h2>Toast 提示框</h2>
        <p class="mark-p">功能组件，触发业务逻辑时使用。</p>
        
        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">基础的按钮用法。</span>
                    <uiButton @click.native="showToast">点我触发</uiButton>
                    <uiButton type="primary" :hollow="false"  @click.native="showToast2">成功提示</uiButton>
                    <uiButton type="warning" :hollow="false" @click.native="showToast3">警告提示</uiButton>
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
    import codeButton from '!raw!../components/func/toast'

    import toast from '../components/func/toast'
    export default {
        name: 'start',
        components: {
            uiButton,
            codeBlock,
            toast
        },
        data () {
            return {
                codeButton,
                visible: false,
                type: '',
                content: ''
            }
        },
        methods: {
            showToast () {
                this.visible = true
                this.type = 'loading'
                this.content = '正在加载中...'
            },
            showToast2 () {
                this.visible = true
                this.type = 'success'
                this.content = '操作成功！'
            },
            showToast3 () {
                this.visible = true
                this.type = 'warn'
                this.content = '操作失败'
            }
        }
    }
</script>

<style lang="less">
    // @import 'style.less';
</style>