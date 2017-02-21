<!--
    author: tony
    title: 文本输入框
    params:
        value: 文本框的值
        type：文本框的类型，默认为text，可选：password
        placeholder：文本框占位文字
        disabled：文本框禁用状态，true表示禁用，false表示可用
        maxlength：文本框最大输入值
        readonly：文本框只读属性
        icon：输入框尾部图标
    event:
        icon-click: 图标点击时触发事件
        on-enter: 输入框获得焦点，键盘按下enter键时触发
        on-focus: 输入框获得焦点时触发
        on-blur: 输入框失去焦点时触发
        on-change：输入框失去焦点时，文本框的内容有改变时触发
-->
<template>
    <div class="ui-input-wrap" 
        :class="{
            'ui-input-disabled': disabled
        }">
        <i class="ui-icon" v-if="iconName" :class="iconName" @click="handleIconClick"></i>
        <input class="ui-input" v-if="type === 'text'"
            type="text" 
            v-model="model"  
            :placeholder="placeholder" 
            :readonly="readonly" 
            :disabled="disabled"
            :maxlength="maxlength"
            @keyup.enter="handleEnter"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange">
        <input class="ui-input" v-if="type === 'password'"
            type="password" 
            v-model="model"  
            :placeholder="placeholder" 
            :readonly="readonly" 
            :disabled="disabled"
            :maxlength="maxlength"
            @keyup.enter="handleEnter"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange">
    </div>
</template>
<script>
    export default {
        name: 'input',
        props: {
            value: [String, Number],
            type: {
                type: String,
                default: 'text'
            },
            placeholder: String,
            disabled: Boolean,
            maxlength: Number,
            readonly: Boolean,
            icon: String
        },
        data () {
            return {
                iconNames: this.icon
            }
        },
        mounted () {
            console.log(this.iconNames, 110)
        },
        computed: {
            model: {
                get: function () {
                    return this.value
                },
                set: function (newValue) {
                    this.$emit('input', newValue)
                }
            },
            iconName () {
                return this.icon ? 'icon-' + this.icon : ''
            }
        },
        methods: {
            handleIconClick (event) {
                this.$emit('icon-click', event)
            },
            handleEnter (event) {
                this.$emit('on-enter', event)
            },
            handleFocus (event) {
                this.$emit('on-focus', event)
            },
            handleBlur (event) {
                this.$emit('on-blur', event)
            },
            handleChange () {
                this.$emit('on-change', this.value)
            }
        }
    }

</script>
<style lang="less">
    @import '../../assets/less/normalize.less';
    @import '../../assets/less/base.less';

    .ui-input-wrap, .ui-input {
        display: inline-block;
        width: 100%;
        position: relative
    }
    .ui-input {
        height: 32px;
        line-height: 1.5;
        padding: 4px 7px;
        font-size: 12px;
        border: 1px solid #d7dde4;
        border-radius: 4px;
        color: #657180;
        background-color: #fff;
        background-image: none;
        cursor: text;
        transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out
    }

    .ui-input:focus,.ui-input:hover {
        border-color: #5cadff
    }

    .ui-input::-moz-placeholder {
        color: #c3cbd6;
        opacity: 1
    }

    .ui-input:-ms-input-placeholder {
        color: #c3cbd6
    }

    .ui-input::-webkit-input-placeholder {
        color: #c3cbd6
    }

    .ui-input:focus {
        outline: 0;
        box-shadow: 0 0 0 2px rgba(51,153,255,.2)
    }

    .ui-input-disabled .ui-input  {
        background-color: #f3f3f3;
        opacity: 1;
        cursor: not-allowed;
        color: #ccc
    }
    .ui-input-disabled .ui-icon {
        cursor: not-allowed;
    }
    .ui-input[disabled]:hover,fieldset[disabled] .ui-input:hover {
        border-color: #dfe4e9
    }
    
    .ui-icon {
        position: absolute;
        width: 35px;
        height: 100%;
        right: 0;
        top: 0;
        text-align: center;
        color: #bfcbd9;
        transition: all .3s;
        z-index: 2;
        cursor: pointer;
    }
    .ui-icon:before{
       vertical-align: sub;
       display: inline-block;
    }

    .ui-icon+.ui-input {
        padding-right: 35px;
    }

</style>
