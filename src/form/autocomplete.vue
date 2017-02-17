<template>
    <div class="main-info" id="start">
        <h2>autocomplete 自动补全</h2>
        <p class="mark-p">基本组件-自动补全，一般用于表单自动搜索。</p>
        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">默认如果输入间隔超过300ms，则会请求一次 （这里模拟搜索的值为1和2）</span>
                    <ui-autocomplete v-model="value1" placeholder="请输入您要搜索的内容" :fetch-push="push" >
                    </ui-autocomplete>
                    <p>您输入了：{{value1}}</p>
                </div>
                <div class="codeabout">
                    <span class="spa">自定义样式，可以用style或者class定义</span>
                    <ui-autocomplete v-model="value2" placeholder="请输入您要搜索的内容" :fetch-push="push" style="width:300px;">
                    </ui-autocomplete>
                    <p>您输入了：{{value2}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>返回事件用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">当下拉框有值时，选中某个后触发事件</span>
                    <ui-autocomplete v-model="value3" placeholder="请输入您要搜索的内容" :fetch-push="push" @select="select" style="width:300px;">
                    </ui-autocomplete>
                    <p>您输入了：{{value3}}</p>
                    <p v-show="selectStatus" style="color:red">您已经选择啦！选择的值为“ {{selectStatus}} ”</p>
                </div>
                <div class="codeabout">
                    <span class="spa">点击输入框内的删除图标是触发事件</span>
                    <ui-autocomplete v-model="value4" placeholder="请输入您要搜索的内容" :fetch-push="push" @clear="clear" style="width:300px;">
                    </ui-autocomplete>
                    <p>您输入了：{{value4}}</p>
                    <p v-show="clearStatus" style="color:red">您点击了删除图标~~~</p>
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
                    <codeBlock :code="codeAutocomplete"></codeBlock>
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
                    <td>选择框的值</td>
                    <td>String || Number</td>
                    <td>——</td>
                    <td>null</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>选择框占位文字</td>
                    <td>String</td>
                    <td>——</td>
                    <td>String</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>选择框中的删除按钮图标</td>
                    <td>String</td>
                    <td>none</td>
                    <td>search</td>
                </tr>
                <tr>
                    <td>fetchPush</td>
                    <td>外部提供下拉数据的函数</td>
                    <td>Function</td>
                    <td>none</td>
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
                    <td>select</td>
                    <td>选择框的下拉列表被选中后触发</td>
                    <td>value</td>
                </tr>
                <tr>
                    <td>clear</td>
                    <td>选择框中的删除图标点击后触发</td>
                    <td>null</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>
<script>
    import uiAutocomplete from '../components/form/autocomplete'
    import codeBlock from '../components/codeBlock'
    import codeAutocomplete from '!raw!../components/form/autocomplete'

    export default {
        name: 'start',
        components: {
            uiAutocomplete,
            codeBlock
        },
        data () {
            return {
                codeAutocomplete,
                value1: '',
                value2: '',
                value3: '',
                value4: '',

                list1: [
                    {value: '111111111111'},
                    {value: '111111111'},
                    {value: '1111111111'},
                    {value: '1111'},
                    {value: '111111'}
                ],
                list2: [
                    {value: '222222'},
                    {value: '222'},
                    {value: '2222222'},
                    {value: '222222'},
                    {value: '2222222'}
                ],

                selectStatus: '',
                clearStatus: false
            }
        },
        methods: {
            push (value) {
                // 模拟搜索
                if (value === '1') {
                    return this.list1
                } else if (value === '2') {
                    return this.list2
                } else {
                    return []
                }
            },
            select (value) {
                this.selectStatus = value
                console.log(value)
            },
            clear () {
                this.clearStatus = true
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
