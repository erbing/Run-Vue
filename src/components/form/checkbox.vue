<!--
    author: tony
    title: 多选按钮
    params:
        value: 被选中的值
        label: 当前单选的值，必填
        disabled：禁用单选状态，true表示禁用，false表示可用
        block: 是否为块级
        model: 触发当前数据双向绑定
-->
<template>
    <label class="ui-checkbox-wrap" 
        :class="{
            'ui-checkbox-disabled': disabled,
            'ui-checkbox-checked': isChecked,
            'ui-checkbox-block': block
          }">
        <span class="ui-checkbox">
            <span class="ui-checkbox-inner"></span>
            <input type="checkbox" class="ui-checkbox-input" v-model="model" :value="label" @change="change">
        </span>
        <slot></slot>
        </label>
</template>
<script>
    export default {
        name: 'checkbox',
        props: {
            value: Array,
            disabled: Boolean,
            block: {
                type: Boolean,
                default: false
            },
            label: {
                type: [String, Number, Boolean],
                required: true
            }
        },
        computed: {
            model: {
                get: function () {
                    return this.value
                },
                set: function (newValue) {
                    if (this.disabled) {
                        return false
                    }
                    this.$emit('input', newValue)
                }
            },
            isChecked () {
                for (let i = 0, l = this.value.length; i < l; i += 1) {
                    if (this.value[i] === this.label) {
                        return true
                    }
                }
                return false
            }
        },
        methods: {
            change (event) {
                if (this.disabled) {
                    return false
                }
                this.$emit('change', event)
            }
        }
    }

</script>
<style lang="less">
    @import '../../assets/less/normalize.less';
    @import '../../assets/less/base.less';
    .ui-checkbox-wrap {
        cursor: pointer;
        display: inline-block;
        margin-right: 8px;
    }
    
    .ui-checkbox {
        white-space: nowrap;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
    }
    
    .ui-checkbox-wrapper:hover .ui-checkbox .ui-checkbox-inner {
        border-color: #108ee9;
    }
    .ui-checkbox-disabled .ui-checkbox .ui-checkbox-inner {
        border-color: #d9d9d9;
    }
    
    .ui-checkbox-inner {
        position: relative;
        top: 0;
        left: 0;
        display: inline-block;
        width: 14px;
        height: 14px;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        background-color: #fff;
        -webkit-transition: all .3s;
        transition: all .3s;
    }
    
    .ui-checkbox-inner:after {
        -webkit-transform: rotate(45deg) scale(0);
        -ms-transform: rotate(45deg) scale(0);
        transform: rotate(45deg) scale(0);
        position: absolute;
        left: 4px;
        top: 1px;
        display: table;
        width: 5px;
        height: 8px;
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        content: ' ';
        -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
        transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
    }
    
    .ui-checkbox-input {
        position: absolute;
        left: 0;
        z-index: 1;
        cursor: pointer;
        opacity: 0;
        filter: alpha(opacity=0);
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: none;
    }
    .ui-checkbox-checked .ui-checkbox-inner:after {
        -webkit-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
        position: absolute;
        left: 4px;
        top: 1px;
        display: table;
        width: 5px;
        height: 8px;
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        content: ' ';
        -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
        transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    }
    
    .ui-checkbox-checked .ui-checkbox-inner {
        background-color: #108ee9;
        border-color: #108ee9;
    }
    .ui-checkbox-disabled {
        color: rgba(0, 0, 0, 0.25);
        cursor: not-allowed;
    }
    .ui-checkbox-disabled.ui-checkbox-checked .ui-checkbox-inner:after, .ui-checkbox-disabled .ui-checkbox-inner:after {
        -webkit-animation-name: none;
        animation-name: none;
        border-color: rgba(0, 0, 0, 0.25);
    }
    .ui-checkbox-disabled .ui-checkbox-inner {
        border-color: #d9d9d9;
        background-color: #f3f3f3;
    }
    .ui-checkbox-block{
        display: block;
        margin-right: 0;
    }
</style>
