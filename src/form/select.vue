<template>
    <div class="main-info" id="start">
        <h2>select 选择器</h2>
        <p class="mark-p">基本组件-选择器，一般用于数据选择。</p>
        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">基本使用</span>
                    <ui-select v-model="value1" placeholder="请选择" :items="list"></ui-select>
                    <p>您选择了：{{value1}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>带图标状态</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">使用icon属性，赋值为图标的名称</span>
                    <ui-select v-model="value2" placeholder="请选择" :items="list" icon="triangle-down"></ui-select>
                    <p>您选择了：{{value2}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>自定义长度</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">可以使用style定义，或者是定义class，可以用默认值</span>
                    <ui-select v-model="value3" placeholder="请选择" :items="list" icon="triangle-down" style="width:300px"></ui-select>
                    <p>您选择了：{{value3}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>禁用状态</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">禁用状态，不可点击，不可选择</span>
                    <ui-select v-model="value4" placeholder="请选择" :items="list" icon="triangle-down" :disabled="true"></ui-select>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>选择器返回值</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">选择之后，事件的返回值</span>
                    <ui-select v-model="value5" placeholder="请选择" :items="list" icon="triangle-down" @change="myChoose"></ui-select>
                    <p>点击后返回的内容：{{callBackData}}</p>
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
                    <codeBlock :code="codeSelect"></codeBlock>
                </div>
            </div>
        </div>
        <h2>API</h2>
        <p class="mark-p">我们提供了基本的API ( 里面主要包括了 props、 slot、 event ) </p>
        <table class="api-table" style="margin-bottom:20px;">
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
                    <td>选择器的值</td>
                    <td>String</td>
                    <td>——</td>
                    <td>null</td>
                </tr>
                <tr>
                    <td>items</td>
                    <td>外部传入数据</td>
                    <td>Array</td>
                    <td>——</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>选择器占位文字</td>
                    <td>String</td>
                    <td>String</td>
                    <td>请选择</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>选择器禁用状态，true表示禁用，false表示可用</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>选择器选择界面的标题</td>
                    <td>String</td>
                    <td>String</td>
                    <td>请选择</td>
                </tr>
                <tr>
                    <td>confirm</td>
                    <td>选择器选择界面的确定按钮文字</td>
                    <td>String</td>
                    <td>String</td>
                    <td>确定</td>
                </tr>
                <tr>
                    <td>cancel</td>
                    <td>选择器选择界面的取消按钮文字</td>
                    <td>String</td>
                    <td>String</td>
                    <td>取消</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>选择器的图标</td>
                    <td>String</td>
                    <td>String</td>
                    <td>null</td>
                </tr>
            </tbody>
        </table> 
        <table class="api-table" >
            <thead>
                <tr>
                    <td>事件</td>
                    <td>说明</td>
                    <td>返回值</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>change</td>
                    <td>选择器选择之后触发</td>
                    <td>value（obj）</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>
<script>
    import uiSelect from '../components/form/select'
    import codeBlock from '../components/codeBlock'
    import codeSelect from '!raw!../components/form/select'
    import {province} from '../assets/js/city-data.js'
    export default {
        name: 'start',
        components: {
            uiSelect,
            codeBlock
        },
        data () {
            return {
                codeSelect,
                value1: '',
                value2: '',
                value3: '我是获取到的值',
                value4: '',
                value5: '',

                list: '',

                callBackData: ''
            }
        },
        methods: {
            myChoose (obj) {
                this.callBackData = obj
            },
            inputFocus () {
                this.focusStatus = true
            },
            inputBlur () {
                this.blurStatus = true
            },
            inputChange () {
                this.changeStatus = true
            },
            inputEnter () {
                this.enterStatus = true
            }
        },
        created () {
            this.list = province
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
