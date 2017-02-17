<!--
    author: tony
    title: 文本输入框
    params:
        value: 开关的值
        disabled：开关禁用状态，true表示禁用，false表示可用
        size：开关大小
    event:
        on-checked: 开关点击后触发返回结果
-->
<template>
    <span class="ui-switch" 
        :class="{
            'ui-switch-checked': value,
            'ui-switch-disabled': disabled,
            'ui-switch-small': size === 'small',
            'ui-switch-large': size === 'large'}"
            >
        <input type="checkbox" 
            class="ui-switch-input" 
            v-model="model" 
            :disabled="disabled" 
            @click="toggle">
        <span class="ui-switch-inner">
            <slot name="open" v-if="value"></slot>
            <slot name="close" v-if="!value"></slot>
        </span>
    </span>
</template>
<script>
    export default {
        name: 'switch',
        props: {
            value: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'normal'
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
            toggle () {
                const checked = !this.value
                this.$emit('on-checked', checked)
            }
        }
    }

</script>
<style lang="less">
    @import '../../assets/less/normalize.less';
    @import '../../assets/less/base.less';
    .ui-switch {
        width: 48px;
        height: 24px;
        line-height: 22px;
        border-radius: 24px;
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #ccc;
        background-color: #ccc;
        position: relative;
        cursor: pointer;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: all .2s ease-in-out;
        z-index: 2;
    }
    .ui-switch-input{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 1;
        cursor: pointer;
    }
    .ui-switch-inner {
        color: #fff;
        font-size: 12px;
        position: absolute;
        left: 25px
    }

    .ui-switch-inner i {
        width: 12px;
        height: 12px;
        text-align: center
    }
    .ui-switch-checked {
        border-color: #39f;
        background-color: #39f
    }
    .ui-switch:after {
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background-color: #fff;
        position: absolute;
        left: 1px;
        top: 1px;
        cursor: pointer;
        transition: left .2s ease-in-out,width .2s ease-in-out
    }
    .ui-switch:active:after {
        width: 30px
    }
    .ui-switch-checked:after {
        left: 25px;
    }
    .ui-switch-checked .ui-switch-inner {
        left: 8px;
    }
    .ui-switch:active.ui-switch-checked:after {
        left: 15px
    }
    .ui-switch-disabled {
        cursor: not-allowed;
        background: #f3f3f3;
        border-color: #f3f3f3
    }
    .ui-switch-disabled .ui-switch-input{
        cursor: not-allowed;
    }
    .ui-switch-disabled:after {
        background: #ccc;
    }
    .ui-switch-small {
        width: 35px;
    }
    .ui-switch-small:active:after {
        width: 24px
    }
    .ui-switch-small.ui-switch-checked:after {
        left: 12px
    }
    .ui-switch-small:active.ui-switch-checked:after {
        left: 8px
    }
    .ui-switch-large {
        width: 60px
    }
    .ui-switch-large:active:after {
        width: 32px
    }
    .ui-switch-large.ui-switch-checked:after {
        left: 37px
    }
    .ui-switch-large.ui-switch-checked:after {
        left: 37px
    }
    .ui-switch-large:active.ui-switch-checked:after {
        left: 25px
    }
</style>
