<template>
    <div class="main-info" id="start">

        <funcModal :visible="visible" :type="type" :title="title" :content="content" :callback="ok"></funcModal>

        <h2>Modal 模态框</h2>
        <p class="mark-p">功能组件，触发业务显示内容或者提示用户做出选择时，经常用到。</p>
        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">基础的modal - alert 用法。</span>
                    <uiButton @click.native="showModal">点我触发 alert</uiButton>
                    <uiButton type="primary" :hollow="false" @click.native="showModalCon">点我触发 confirm</uiButton>
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
    import codeButton from '!raw!../components/func/modal'

    import funcModal from '../components/func/modal'

    export default {
        name: 'start',
        components: {
            uiButton,
            codeBlock,
            funcModal
        },
        data () {
            return {
                codeButton,
                visible: false,
                type: 'alert',
                title: '',
                content: '',
                ok: null
            }
        },
        methods: {
            showModal () {
                this.visible = true
                this.type = 'alert'
                this.title = '这是toast'
                this.content = 'lalallalal'
                this.ok = () => {
                    this.visible = false
                }
            },
            showModalCon () {
                this.visible = true
                this.type = 'confirm'
                this.title = '这是toast'
                this.content = 'lalallalal'
                this.ok = () => {
                    this.visible = false
                }
            }
        }
    }
</script>

<style lang="less">
    // @import 'style.less';
</style>