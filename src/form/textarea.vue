<template>
    <div class="main-info" id="start">
        <h2>textarea 文本域</h2>
        <p class="mark-p">基本组件-文本域，一般用于段落输入。</p>
        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">基本使用</span>
                    <ui-textarea v-model="value1" placeholder="请输入您要输入的内容"></ui-textarea>
                    <p>您输入了：{{value1}}</p>
                </div>
                <div class="codeabout">
                    <span class="spa">自定义行数 (2行)</span>
                    <ui-textarea v-model="value1" placeholder="请输入您要输入的内容" :rows="2"></ui-textarea>
                    <p>您输入了：{{value1}}</p>
                </div>
                <div class="codeabout">
                    <span class="spa">文本域长度自定义</span>
                    <ui-textarea v-model="value3" placeholder="请输入您要输入的内容" icon="search" style="width:300px;"></ui-textarea>
                    <p>您输入了：{{value3}}</p>
                </div>
                <div class="codeabout">
                    <span class="spa">基本文本域带字数限制</span>
                    <ui-textarea v-model="value11" placeholder="请输入您要输入的内容" :maxlength="30"></ui-textarea>
                    <p>您可输入最大长度：{{value11.length}}/30字</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>只读状态</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">文本域只能读取，不能修改</span>
                    <ui-textarea v-model="value5" placeholder="请输入您要输入的内容" :readonly="true" icon="search"></ui-textarea>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>禁用状态</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">文本域禁用。</span>
                    <ui-textarea v-model="value6" placeholder="请输入您要输入的内容" :disabled="true"></ui-textarea>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>带事件文本域使用</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">文本域获取焦点。</span>
                    <ui-textarea v-model="value7" placeholder="请输入您要输入的内容" @on-focus="inputFocus" icon="search"></ui-textarea>
                    <p v-show="focusStatus" style="color: red">文本域获取到了焦点~~~~</p>
                </div>
                <div class="codeabout">
                    <span class="spa">文本域失去焦点。</span>
                    <ui-textarea v-model="value8" placeholder="请输入您要输入的内容" @on-blur="inputBlur" icon="search"></ui-textarea>
                    <p v-show="blurStatus" style="color: red">文本域获失去了焦点~~~</p>
                </div>
                <div class="codeabout">
                    <span class="spa">失去焦点，文本域发生改变。</span>
                    <ui-textarea v-model="value9" placeholder="请输入您要输入的内容" @on-change="inputChange" icon="search"></ui-textarea>
                    <p v-show="changeStatus" style="color: red">文本域文本改变了~~~~</p>
                </div>
                <div class="codeabout">
                    <span class="spa">文本域输入时，键盘键enter抬起。</span>
                    <ui-textarea v-model="value10" placeholder="请输入您要输入的内容" @on-enter="inputEnter" icon="search"></ui-textarea>
                    <p v-show="enterStatus" style="color: red">文本域获取焦点时，键盘键enter按下了~~~~</p>
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
                    <codeBlock :code="codeTextarea"></codeBlock>
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
                    <td>文本域的值</td>
                    <td>String || Number</td>
                    <td>——</td>
                    <td>none</td>
                </tr>
                <tr>
                    <td>rows</td>
                    <td>文本域的行数</td>
                    <td>Number</td>
                    <td>Number</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>文本域占位文字</td>
                    <td>String</td>
                    <td>String</td>
                    <td>String</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>文本域禁用状态，true表示禁用，false表示可用</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>maxlength</td>
                    <td>文本域最大输入值</td>
                    <td>Number</td>
                    <td>Number</td>
                    <td>Number</td>
                </tr>
                <tr>
                    <td>readonly</td>
                    <td>文本域只读属性</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>false</td>
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
                    <td>on-enter</td>
                    <td>文本域获得焦点，键盘按下enter键时触发</td>
                    <td>event</td>
                </tr>
                <tr>
                    <td>on-focus</td>
                    <td>文本域获得焦点时触发</td>
                    <td>event</td>
                </tr>
                <tr>
                    <td>on-blur</td>
                    <td>文本域失去焦点时触发</td>
                    <td>event</td>
                </tr>
                <tr>
                    <td>on-change</td>
                    <td>文本域失去焦点时，文本域的内容有改变时触发</td>
                    <td>value(String || Number)</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>
<script>
    import uiTextarea from '../components/form/textarea'
    import codeBlock from '../components/codeBlock'
    import codeTextarea from '!raw!../components/form/textarea'

    export default {
        name: 'start',
        components: {
            uiTextarea,
            codeBlock
        },
        data () {
            return {
                codeTextarea,
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
            inputChange (val) {
                console.log(val)
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
