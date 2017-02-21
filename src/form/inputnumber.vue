<template>
    <div class="main-info" id="start">
        <h2>InputNumber 计数器</h2>
        <p class="mark-p">基本组件-计数器，一般用于表单数字的计数选择。</p>
        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">基本使用，默认最小值为0，最大值不设限，可直接输入数字，当输入的是非数字是，会默认删除</span>
                    <ui-input-number v-model="value1" placeholder="请输入数字"></ui-input-number>
                    <p>您输入了：{{value1}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>带数字限制用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">可以设置最大值和最小值，当当前值小于最小默认值时，当前值会置为默认值最小值，如：当前值为1，默认最小值为2，最大值为10</span>
                    <ui-input-number v-model="value2" placeholder="请输入数字" :minNum="2" :maxNum="10"></ui-input-number>
                    <p>您输入了：{{value2}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>修改步数用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">可以修改计数器的当前步数，当减小或增大后的值小于最小值或大于最大值，则计数器不继续执行，如当前步数为5步，最小值为0，最大值为10</span>
                    <ui-input-number v-model="value3" placeholder="请输入数字" :stepNum="5" :maxNum="10"></ui-input-number>
                    <p>您输入了：{{value3}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>自定义计数器的样式</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">可以自定义计数器样式，可以用style或class自定义</span>
                    <ui-input-number v-model="value4" placeholder="请输入数字" style="width:300px;"></ui-input-number>
                    <p>您输入了：{{value4}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>禁用状态</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">基本使用</span>
                    <ui-input-number v-model="value5" placeholder="请输入数字" :disabled="true"></ui-input-number>
                    <p>您输入了：{{value5}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>带事件计数器使用</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">当减小数字或增加数字按钮被点击后触发</span>
                    <ui-input-number v-model="value6" placeholder="请输入数字" @on-minus="minus" @on-plus="plus"></ui-input-number>
                    <p>您输入了：{{value6}}</p>
                    <p v-show="minusStatus || plusStatus" style="color:red">您点击了{{minusStatus && !plusStatus ? '减少' : '增加'}}按钮~~~</p>
                </div>
                <div class="codeabout">
                    <span class="spa">计数器输入框事件</span>
                    <ui-input-number v-model="value7" placeholder="请输入数字" @on-focus="inputFocus"></ui-input-number>
                    <p>您输入了：{{value7}}</p>
                    <p v-show="focusStatus" style="color:red">计数器输入框获取了焦点~~~</p>
                    <ui-input-number v-model="value8" placeholder="请输入数字" @on-blur="inputBlur"></ui-input-number>
                    <p>您输入了：{{value8}}</p>
                    <p v-show="blurStatus" style="color:red">计数器输入框失去了焦点~~~</p>
                    <ui-input-number v-model="value9" placeholder="请输入数字" @on-change="inputChange"></ui-input-number>
                    <p>您输入了：{{value9}}</p>
                    <p v-show="changeStatus" style="color:red">计数器输入框的值改变了~~~改变的值为：{{changeStatus}}</p>
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
                    <codeBlock :code="codeInputNumber"></codeBlock>
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
                    <td>计数器的值</td>
                    <td>String || Number</td>
                    <td>none</td>
                    <td>none</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>计数器占位文字</td>
                    <td>String</td>
                    <td>——</td>
                    <td>String</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>计数器禁用状态，true表示禁用，false表示可用</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>stepNum</td>
                    <td>计数器的步数</td>
                    <td>Number</td>
                    <td>——</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>minNum</td>
                    <td>计数器的最小值</td>
                    <td>Number</td>
                    <td>——</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>maxNum</td>
                    <td>计数器的最大值</td>
                    <td>Number</td>
                    <td>——</td>
                    <td>Infinity</td>
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
                    <td>on-minus</td>
                    <td>计数器减少时触发</td>
                    <td>value</td>
                </tr>
                <tr>
                    <td>on-plus</td>
                    <td>计数器增加时触发</td>
                    <td>value</td>
                </tr>
                <tr>
                    <td>on-focus</td>
                    <td>计数器获得焦点时触发</td>
                    <td>event</td>
                </tr>
                <tr>
                    <td>on-blur</td>
                    <td>计数器失去焦点时触发</td>
                    <td>event</td>
                </tr>
                <tr>
                    <td>on-change</td>
                    <td>计数器失去焦点时，计数器的内容有改变时触发</td>
                    <td>value</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>
<script>
    import uiInputNumber from '../components/form/inputnumber'
    import codeBlock from '../components/codeBlock'
    import codeInputNumber from '!raw!../components/form/inputnumber'

    export default {
        name: 'start',
        components: {
            uiInputNumber,
            codeBlock
        },
        data () {
            return {
                codeInputNumber,
                value1: 1,
                value2: 1,
                value3: 0,
                value4: 0,
                value5: 0,
                value6: 1,
                value7: 1,
                value8: 1,
                value9: 1,

                minusStatus: false,
                plusStatus: false,
                focusStatus: false,
                blurStatus: false,
                changeStatus: ''
            }
        },
        methods: {
            minus (value) {
                this.minusStatus = true
                this.plusStatus = false
            },
            plus (value) {
                this.minusStatus = false
                this.plusStatus = true
            },
            inputFocus () {
                this.focusStatus = true
            },
            inputBlur () {
                this.blurStatus = true
            },
            inputChange (value) {
                console.log(value)
                this.changeStatus = value
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
