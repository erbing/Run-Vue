<template>
    <div class="main-info" id="start">
        <h2>Checkbox</h2>
        <p class="mark-p">基础组件，触发业务逻辑时使用。</p>
        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">基础的选择框用法。</span>
                    <uiCheckbox :value="checkValue" :model="checked"></uiCheckbox>
                </div>
            </div>
        </div>

        <div class="codebox">
            <div class="codetitle">
                <span>禁用状态</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">按钮不可用状态。</span>
                    <uiButton :disabled="true">默认按钮</uiButton>
                    <uiButton type="primary" :disabled="true">主要按钮</uiButton>
                    <uiButton type="primary" :hollow="true" :disabled="true">主要按钮镂空</uiButton>
                    <uiButton type="text" :disabled="true">文字按钮</uiButton>
                </div>
            </div>
        </div>

        <div class="codebox">
            <div class="codetitle">
                <span>色彩</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <p class="spa">不同的颜色代表不同的提示</p>
                    <p class="spa">默认普通样式 type值：info、success、warning、danger</p>
                    <uiButton type="info">信息按钮</uiButton>
                    <uiButton type="success">成功按钮</uiButton>
                    <uiButton type="warning">警告按钮</uiButton>
                    <uiButton type="danger">危险按钮</uiButton>
                    <uiButton type="info" :disabled="true">不可用按钮</uiButton>
                    <p class="spa">镂空样式。</p>
                    <uiButton type="info" :hollow="true">信息按钮</uiButton>
                    <uiButton type="success" :hollow="true">成功按钮</uiButton>
                    <uiButton type="warning" :hollow="true">警告按钮</uiButton>
                    <uiButton type="danger" :hollow="true">危险按钮</uiButton>
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
                    <codeBlock :code="codeCheckbox"></codeBlock>
                </div>
            </div>
        </div>

        <h2>API</h2>
        <p class="mark-p">我们提供了基本的API ( 里面主要包括了 props、 slot、 event ) </p>
        <div class="codebox">
            <div class="codetitle">
                <span>API</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    默认、主色、强调色, 不可用、全宽五种不同状态的按钮示例
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
    import uiButton from '../components/base/button'
    import uiCheckbox from '../components/from/checkbox'
    import codeBlock from '../components/codeBlock'
    import codeCheckbox from '!raw!../components/from/checkbox'

    export default {
        name: 'start',
        components: {
            uiButton,
            uiCheckbox,
            codeBlock
        },
        data () {
            return {
                codeCheckbox,
                checked: false,
                checkValue: '1'
            }
        }
    }
</script>

<style lang="less">
    h2{
        margin: 0;
        padding-bottom: .3em;
        font-size: 1.7em;
        line-height: 1.334;
        border-bottom: 1px solid #eee;
    }
    .mark-p{
        font-size: 1.2em;
        border-left: 6px solid #eee;
        padding-left: 10px;
        margin: 30px auto;
    }
    .codebox{
        margin-top: 12px;
        margin-bottom: 40px;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647),0 1px 4px rgba(0,0,0,.117647);
        .codetitle{
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 56px;
            padding: 0 24px;
            background-color: #e8e8e8;
            cursor: pointer;
            span{
                padding-right: 16px;
                line-height: 56px;
                font-size: 20px;
                position: relative;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: rgba(0,0,0,.54);
            }
        }
        .codecontent {
            font-size: 1.2em;
        }
        .codeabout {
            overflow: auto;
            padding: 10px 20px 0;
            margin: 0;
            padding-bottom: 20px;
            .spa{
                display: block;
                margin-bottom: 20px;
            }
        }
    }
</style>