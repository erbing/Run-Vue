<template>
    <div class="main-info" id="start">
        <h2>AutoheightTextarea 高度自动改变的文本区域</h2>
        <p class="mark-p">功能组件，在对格式要求不是特别高时，模拟 `textarea`。</p>

        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>

            <div class="codecontent">
                <div class="codeabout">
                    <div class="spa">基础的 `AutoheightTextarea` 用法。</div>
                    <AutoheightTextarea
                        v-model="mainTextarea.value"
                        :pre="mainTextarea.pre"
                        :contenteditable="mainTextarea.contenteditable"
                        class="main-textarea"
                    ></AutoheightTextarea>
                    <div class="output-wrapper">
                        您的输入为（带换行显示）：
                        <div class="output pre">{{ mainTextarea.value }}</div>
                    </div>
                    <div>下面是disabled textarea</div>
                     <AutoheightTextarea
                        :pre="true"
                        :contenteditable="false"
                        class="main-textarea"
                    ></AutoheightTextarea>
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
                    <td>contenteditable</td>
                    <td>是否可编辑</td>
                    <td>Boolean</td>
                    <td>true | false</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>pre</td>
                    <td>是否展示换行符，使用 `white-space: prewrap;` 实现。</td>
                    <td>Boolean</td>
                    <td>true | false</td>
                    <td>true</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>

</template>

<script>
    import uiButton from '../components/base/button'
    import codeBlock from '../components/codeBlock'
    import codeButton from '!raw!../components/func/autoheight-textarea'

    import backTop from '../components/func/backTop'
    import goTop from '../components/func/go-top'
    import AutoheightTextarea from '../components/func/autoheight-textarea'

    export default {
        name: 'backTop',
        components: {
            uiButton,
            codeBlock,
            uiBackTop: backTop,
            uiGoTop: goTop,
            AutoheightTextarea
        },
        data () {
            return {
                codeButton,
                mainTextarea: {
                    pre: true,
                    contenteditable: true,
                    value: 'Look, I am the initial value'
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .main-textarea {
        width: 100%;
        min-height: 100px;
        background-color: #eee;
    }
    .pre {
        white-space: pre-wrap;
    }
</style>
