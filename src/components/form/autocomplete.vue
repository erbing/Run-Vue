<!--
    author: tony
    title: 自动补全
    params:
        value: 选择框的值
        placeholder：选择框占位文字
        icon：选择框的删除按钮图标
        fetchPush：外部提供下拉数据的函数
    event:
        select: 选择框的下拉列表被选中后触发
        clear: 选择框中的删除图标点击后触发
-->
<template>
    <div class="ui-autocomplete-wrap" >
        <div class="ui-autocomplete-box">
            <input class="ui-autocomplete-input"
            type="text" 
            v-model="model"  
            :placeholder="placeholder" 
            @keyup.enter="handleEnter"
            @input="change">
            <i class="ui-icon icon-close" v-show="value" @click="clear"></i>
        </div>
        <div class="ui-autocomplete-list" v-show="pushStatus">
            <ul>
                <li v-if="loading">loading...</li>
                <li v-for="item in pushList" @click="handleClick(item.value)">{{item.value}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'search',
        props: {
            value: [String, Number],
            placeholder: String,
            icon: String,
            fetchPush: Function
        },
        data () {
            return {
                loading: false,
                timer: null,
                pushStatus: false,
                pushList: []
            }
        },
        computed: {
            model: {
                get: function () {
                    return this.value
                },
                set: function (newValue) {
                    this.$emit('input', newValue)
                }
            }
        },
        methods: {
            change (e) {
                const value = e.target.value
                this.$emit('input', value)
                this.showPush(value)
            },
            showPush (value) {
                if (typeof this.fetchPush === 'function') {
                    this.pushStatus = true
                    this.pushList = []
                    this.loading = true
                    clearTimeout(this.timer)
                    this.timer = setTimeout(() => {
                        const arrList = this.fetchPush(value)
                        if (Array.isArray(arrList) && arrList.length > 0) {
                            this.loading = false
                            this.pushList = arrList
                        } else {
                            this.hidePush()
                        }
                        console.log(arrList, value)
                    }, 300)
                }
            },
            hidePush () {
                this.pushStatus = false
                this.pushList = []
                this.loading = false
                clearTimeout(this.timer)
                this.timer = null
            },
            handleClick (value) {
                this.hidePush()
                this.$emit('input', value)
                this.$emit('select', value)
            },
            clear () {
                this.hidePush()
                this.$emit('input', '')
                this.$emit('clear')
            }
        }
    }

</script>
<style lang="less">
    @import '../../assets/less/normalize.less';
    @import '../../assets/less/base.less';

    .ui-autocomplete-wrap {
        display: inline-block;
        width: 100%;
        position: relative
    }
    .ui-autocomplete-box{
        height: 32px;
        line-height: 1.5;
        font-size: 12px;
        border: 1px solid #d7dde4;
        border-radius: 4px;
        color: #657180;
        background-color: #fff;
        transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
        position: relative;
    }
    .ui-autocomplete-input {
        width: 100%;
        height: 100%;
        border: none;
        cursor: text;
        border-radius: 5px;
        padding-right: 25px;
        padding-left: 5px;
    }
    .ui-autocomplete-input:focus{
        outline: none;
    }

    .ui-autocomplete-box:focus,.ui-autocomplete-box:hover {
        border-color: #5cadff
    }
    .ui-autocomplete-box::-webkit-input-placeholder {
        color: #c3cbd6
    }

    .ui-autocomplete-box:focus {
        outline: 0;
        box-shadow: 0 0 0 2px rgba(51,153,255,.2)
    }
    .ui-autocomplete-list{
        width: 100%;
        max-height: 100px;
        padding: 5px 0;
        border: 1px solid #d7dde4;
        border-radius: 4px;
        background-color: #ffffff;
        overflow: auto;
        ul {
            padding: 0;
            margin: 0;
            list-style: none;
            li{
                height: 30px;
                line-height: 30px;
                padding: 0 10px;
            }
            li:hover{
                background-color: #f3f3f3
            }
        }
    }
    
    

</style>
