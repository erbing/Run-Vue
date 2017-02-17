<template>
    <div class="main-info" id="start">
        <h2>Checkbox 多选框</h2>
        <p class="mark-p">基本组件-多选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。</p>
        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">单独使用</span>
                    <ui-checkbox v-model="checkbox" :label="data1">单独使用</ui-checkbox>
                    <p>已选择：{{checkbox}}</p>
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
                    <ui-checkbox v-model="checkbox3" v-for="item in data3" :label="item">{{item}}</ui-checkbox>
                    <p>已选择：{{checkbox3}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>全选使用</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">单选按钮组合使用。</span>
                    <ui-checkbox v-model="checkAll" :label="dataAll" @change="isCheckAll" :block="true">全选</ui-checkbox>
                    <ui-checkbox v-model="checkbox4" v-for="item in data4" @change="isCheck" :label="item">{{item}}</ui-checkbox>
                    <p>已选择：{{checkbox4}}</p>
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
                    <ui-checkbox v-model="checkbox5" :label="data5" :disabled="true">未选择禁用</ui-checkbox>
                    <ui-checkbox v-model="checkbox6" :label="data6" :disabled="true">已选择禁用</ui-checkbox>
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
                    <td>Array</td>
                    <td>——</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>当前单选的值，必填</td>
                    <td>String, Number, Boolean</td>
                    <td>——</td>
                    <td>String || Array</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>禁用单选状态，true表示禁用，false表示可用</td>
                    <td>Boolean</td>
                    <td>——</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>block</td>
                    <td>是否是块级，true表示块级，false表示内联块级</td>
                    <td>Boolean</td>
                    <td>——</td>
                    <td>false</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import uiCheckbox from '../components/form/checkbox'
    import codeBlock from '../components/codeBlock'
    import codeCheckbox from '!raw!../components/form/checkbox'
    import uiButton from '../components/base/button'

    export default {
        name: 'start',
        components: {
            uiCheckbox,
            codeBlock,
            uiButton
        },
        data () {
            return {
                codeCheckbox,
                data1: '中国',
                data2: true,
                data3: ['北京', '上海', '广州', '深圳'],
                data4: ['北京', '上海', '广州', '深圳'],
                data5: '',
                data6: true,
                checkbox: [],
                checkbox2: [],
                checkbox3: ['上海', '深圳'],
                checkbox4: ['上海', '深圳'],
                checkbox5: [],
                checkbox6: [true],

                dataAll: '1',
                checkAll: []
            }
        },
        methods: {
            isCheckAll () {
                this.checkbox4 = this.checkAll.length ? this.data4 : []
            },
            isCheck () {
                const arr = this.dataAll.toString().split('')
                this.checkAll = this.checkbox4.length === this.data4.length ? arr : []
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
