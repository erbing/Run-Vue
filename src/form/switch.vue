<template>
    <div class="main-info" id="start">
        <h2>switch 开关</h2>
        <p class="mark-p">基本组件-switch 开关，一般用于选择状态。</p>
        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">基本使用</span>
                    <ui-switch v-model="value1"></ui-switch>
                    <p>开关的值为：{{value1}}</p>
                </div>
               
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>开关大小</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">开关大小分为small，nomal，large（默认为nomal），建议字数不超过2个汉字</span>
                    <ui-switch v-model="value2" size="small"></ui-switch>
                    <ui-switch v-model="value3">
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </ui-switch>
                    <ui-switch v-model="value4" size="large">
                        <span slot="open">ON</span>
                        <span slot="close">OFF</span>
                    </ui-switch>
                    <ui-switch v-model="value5" size="large">
                        <span slot="open">开启</span>
                        <span slot="close">关闭</span>
                    </ui-switch>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>带图标的开关</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">图标最好是对立的含义</span>
                    <ui-switch v-model="value6">
                        <i slot="open" class="icon-right"></i>
                        <i slot="close" class="icon-wrong"></i>
                    </ui-switch>
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
                    <ui-switch v-model="value7" :disabled="true"></ui-switch>
                </div>
                <div class="codeabout">
                    <span class="spa">带图标基本框禁用。</span>
                    <ui-switch v-model="value8" :disabled="true">
                        <i slot="open" class="icon-right"></i>
                        <i slot="close" class="icon-wrong"></i>
                    </ui-switch>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>开关事件</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">点击开关触发事件</span>
                    <ui-switch v-model="value9" @on-checked="checkSwitch">
                        <i slot="open" class="icon-right"></i>
                        <i slot="close" class="icon-wrong"></i>
                    </ui-switch>
                    <p v-show="switchStatus" style="color: red">开关打开了~~~~</p>
                    <p v-show="!switchStatus" style="color: red">开关关上了~~~~</p>
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
                    <codeBlock :code="codeSwitch"></codeBlock>
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
                    <td>开关的值</td>
                    <td>Boolean</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>开关禁用状态，true表示禁用，false表示可用</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>开关尺寸</td>
                    <td>String</td>
                    <td>small，large</td>
                    <td>nomal</td>
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
                    <td>on-checked</td>
                    <td>开关点击后触发，返回结果</td>
                    <td>value(Boolean)</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>
<script>
    import uiSwitch from '../components/form/switch'
    import codeBlock from '../components/codeBlock'
    import codeSwitch from '!raw!../components/form/switch'

    export default {
        name: 'start',
        components: {
            uiSwitch,
            codeBlock
        },
        data () {
            return {
                codeSwitch,
                value1: false,
                value2: false,
                value3: false,
                value4: false,
                value5: false,
                value6: false,
                value7: false,
                value8: true,
                value9: false,

                switchStatus: false
            }
        },
        methods: {
            checkSwitch (value) {
                this.switchStatus = value
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
