<template>
    <div class="main-info" id="start">
        <h2>Radio 单选框</h2>
        <p class="mark-p">基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。</p>
        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">单独使用</span>
                    <ui-radio v-model="radio" :label="0">单独使用</ui-radio>
                    <p>已选择：{{radio}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>组合使用</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">单选按钮组合使用。</span>
                    <ui-radio v-model="radio1" :label="'北京'">北京</ui-radio>
                    <ui-radio v-model="radio1" :label="'上海'">上海</ui-radio>
                    <ui-radio v-model="radio1" :label="'广州'">广州</ui-radio>
                    <ui-radio v-model="radio1" :label="'深圳'">深圳</ui-radio>
                    <p>已选择：{{radio1}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>禁用状态</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">单选按钮不可用状态。</span>
                    <ui-radio v-model="radio2" :label="0" :disabled="true">未选择禁用</ui-radio>
                    <ui-radio v-model="radio3" :label="0" :disabled="true">已选择禁用</ui-radio>
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
                    <codeBlock :code="codeRadio"></codeBlock>
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
                    <td>value</td>
                    <td>被选中的值</td>
                    <td>String || Number</td>
                    <td>——</td>
                    <td>none</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>当前单选的值，必填</td>
                    <td>String || Number</td>
                    <td>none</td>
                    <td>String || Number</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>禁用单选状态，true表示禁用，false表示可用</td>
                    <td>Boolean</td>
                    <td>——</td>
                    <td>false</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>
<script>
    import uiRadio from '../components/form/radio'
    import codeBlock from '../components/codeBlock'
    import codeRadio from '!raw!../components/form/radio'

    export default {
        name: 'start',
        components: {
            uiRadio,
            codeBlock
        },
        data () {
            return {
                codeRadio,
                radio: '',
                radio1: '',
                radio2: '',
                radio3: 0
            }
        }
    }

</script>
<style lang="less">
    h2 {
        margin: 0;
        padding-bottom: .3em;
        font-size: 1.7em;
        line-height: 1.334;
        border-bottom: 1px solid #eee;
    }
    
    .mark-p {
        font-size: 1.2em;
        border-left: 6px solid #eee;
        padding-left: 10px;
        margin: 30px auto;
    }
    
    .codebox {
        margin-top: 12px;
        margin-bottom: 40px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
        .codetitle {
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
            span {
                padding-right: 16px;
                line-height: 56px;
                font-size: 20px;
                position: relative;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: rgba(0, 0, 0, .54);
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
            .spa {
                display: block;
                margin-bottom: 20px;
            }
        }
        .codetable{
            padding: 20px;
            table{
                width:100%;
                border: 1px solid #cccccc;
                th{
                    line-height: 40px;
                    font-size: 18px;
                    font-weight: normal;
                    text-align: center;
                    background: #eeeeee;
                    border: none;
                    border-right: 1px solid #cccccc;
                }
                td{
                    border: none;
                    border-top: 1px solid #cccccc;
                    border-right: 1px solid #cccccc;
                    text-align: center;
                    font-size: 14px;
                    line-height: 40px;
                }
            }
        }
    }

</style>
