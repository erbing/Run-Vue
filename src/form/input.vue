<template>
    <div class="main-info" id="start">
        <h2>Input 文本输入框</h2>
        <p class="mark-p">基本组件-文本输入框，一般用于表单文本输入。</p>
        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">基本使用</span>
                    <ui-input v-model="value1" placeholder="请输入您要输入的内容"></ui-input>
                    <p>您输入了：{{value1}}</p>
                </div>
                <div class="codeabout">
                    <span class="spa">基本带图标使用</span>
                    <ui-input v-model="value2" placeholder="请输入您要输入的内容" icon="search"></ui-input>
                    <p>您输入了：{{value2}}</p>
                </div>
                <div class="codeabout">
                    <span class="spa">输入框长度自定义</span>
                    <ui-input v-model="value3" placeholder="请输入您要输入的内容" icon="search" style="width:300px;"></ui-input>
                    <p>您输入了：{{value3}}</p>
                </div>
                <div class="codeabout">
                    <span class="spa">基本输入框带字数限制</span>
                    <ui-input v-model="value11" placeholder="请输入您要输入的内容" :maxlength="30"></ui-input>
                    <p>您可输入最大长度：{{value11.length}}/30字</p>
                </div>
                <div class="codeabout">
                    <span class="spa">图标带点击事件</span>
                    <ui-input v-model="value4" placeholder="请输入您要输入的内容" icon="search" @icon-click="search"></ui-input>
                    <p v-show="searchStatus" style="color: red">您搜索的内容是：{{value4}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>只读状态</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">输入框只能读取，不能修改</span>
                    <ui-input v-model="value5" placeholder="请输入您要输入的内容" :readonly="true" icon="search"></ui-input>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>禁用状态</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">基本框禁用。</span>
                    <ui-input v-model="value6" placeholder="请输入您要输入的内容" :disabled="true"></ui-input>
                </div>
                <div class="codeabout">
                    <span class="spa">带图标基本框禁用。</span>
                    <ui-input v-model="value6" placeholder="请输入您要输入的内容" icon="search" :disabled="true"></ui-input>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>带事件输入框使用</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">输入框获取焦点。</span>
                    <ui-input v-model="value7" placeholder="请输入您要输入的内容" @on-focus="inputFocus" icon="search"></ui-input>
                    <p v-show="focusStatus" style="color: red">输入框获取到了焦点~~~~</p>
                </div>
                <div class="codeabout">
                    <span class="spa">输入框失去焦点。</span>
                    <ui-input v-model="value8" placeholder="请输入您要输入的内容" @on-blur="inputBlur" icon="search"></ui-input>
                    <p v-show="blurStatus" style="color: red">输入框获失去了焦点~~~</p>
                </div>
                <div class="codeabout">
                    <span class="spa">失去焦点，输入框发生改变。</span>
                    <ui-input v-model="value9" placeholder="请输入您要输入的内容" @on-change="inputChange" icon="search"></ui-input>
                    <p v-show="changeStatus" style="color: red">输入框文本改变了~~~~</p>
                </div>
                <div class="codeabout">
                    <span class="spa">输入框输入时，键盘键enter抬起。</span>
                    <ui-input v-model="value10" placeholder="请输入您要输入的内容" @on-enter="inputEnter" icon="search"></ui-input>
                    <p v-show="enterStatus" style="color: red">输入框获取焦点时，键盘键enter按下了~~~~</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>输入框的类型</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">文本类型，默认值</span>
                    <ui-input v-model="value12" placeholder="请输入您要输入的内容"></ui-input>
                </div>
                <div class="codeabout">
                    <span class="spa">密码输入框</span>
                    <ui-input v-model="value13" placeholder="请输入您要输入的内容" type="password"></ui-input>
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
                    <codeBlock :code="codeInput"></codeBlock>
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
                    <td>文本框的值</td>
                    <td>String || Number</td>
                    <td>——</td>
                    <td>none</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>文本框的类型，默认为text</td>
                    <td>String</td>
                    <td>password</td>
                    <td>text</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>文本框占位文字</td>
                    <td>String</td>
                    <td>——</td>
                    <td>String</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>文本框禁用状态，true表示禁用，false表示可用</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>maxlength</td>
                    <td>文本框最大输入值</td>
                    <td>Number</td>
                    <td>——</td>
                    <td>Number</td>
                </tr>
                <tr>
                    <td>readonly</td>
                    <td>文本框只读属性</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>输入框尾部图标</td>
                    <td>String</td>
                    <td>search,user等</td>
                    <td>none</td>
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
                    <td>icon-click</td>
                    <td>图标点击时触发事件</td>
                    <td>event</td>
                </tr>
                <tr>
                    <td>on-enter</td>
                    <td>输入框获得焦点，键盘按下enter键时触发</td>
                    <td>event</td>
                </tr>
                <tr>
                    <td>on-focus</td>
                    <td>输入框获得焦点时触发</td>
                    <td>event</td>
                </tr>
                <tr>
                    <td>on-blur</td>
                    <td>输入框失去焦点时触发</td>
                    <td>event</td>
                </tr>
                <tr>
                    <td>on-change</td>
                    <td>输入框失去焦点时，文本框的内容有改变时触发</td>
                    <td>value(String || Number)</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>
<script>
    import uiInput from '../components/form/input'
    import codeBlock from '../components/codeBlock'
    import codeInput from '!raw!../components/form/input'

    export default {
        name: 'start',
        components: {
            uiInput,
            codeBlock
        },
        data () {
            return {
                codeInput,
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '这里是我读取的内容',
                value6: '',
                value7: '',
                value8: '',
                value9: '默认文字',
                value10: '',
                value11: '',
                value12: '',
                value13: '',

                searchStatus: false,
                focusStatus: false,
                blurStatus: false,
                changeStatus: false,
                enterStatus: false
            }
        },
        methods: {
            search () {
                this.searchStatus = true
            },
            inputFocus () {
                this.focusStatus = true
            },
            inputBlur () {
                this.blurStatus = true
            },
            inputChange (value) {
                console.log(value)
                this.changeStatus = true
            },
            inputEnter () {
                this.enterStatus = true
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
