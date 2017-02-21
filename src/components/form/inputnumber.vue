<!--
    author: tony
    title: 计数器
    params:
        value: 计数器的值
        placeholder：计数器占位文字
        disabled：计数器禁用状态，true表示禁用，false表示可用
        stepNum：计数器的步数
        minNum：计数器的最小值
        maxNum：计数器的最大值
    event:
        on-minus: 计数器减少时触发
        on-plus: 计数器增加时触发
        on-focus: 计数器获得焦点时触发
        on-blur: 计数器失去焦点时触发
        on-change：计数器失去焦点时，计数器的内容有改变时触发
-->
<template>
    <div class="ui-inputNumber" 
        :class="{
            'ui-inputNumber-disabled': disabled
        }">
        <span class="ui-inputNumber-icon icon-sub" :class="{'minus-decrease': value<=minNum}" @click="minus"></span>
        <span class="ui-inputNumber-icon icon-add2" :class="{'plus-decrease': value>=maxNum}" @click="plus"></span>
        <input class="ui-input"
            type="text" 
            v-model="model"  
            :placeholder="placeholder"  
            :disabled="disabled"
            @keyup="handleKeyup"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange">
    </div>
</template>
<script>
    export default {
        name: 'inputNumber',
        props: {
            value: [String, Number],
            stepNum: {
                type: Number,
                default: 1
            },
            minNum: {
                type: Number,
                default: 0
            },
            maxNum: {
                type: Number,
                default: Infinity
            },
            placeholder: String,
            disabled: Boolean
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
            minus () {
                if (this.value <= this.minNum || this.disabled) return
                const _value = parseInt(this.value) - this.stepNum
                if (_value >= 0) {
                    this.$emit('input', _value)
                    this.$emit('on-minus', _value)
                }
            },
            plus () {
                if (this.value >= this.maxNum || this.disabled) return
                const _value = parseInt(this.value) + this.stepNum
                if (_value <= this.maxNum) {
                    this.$emit('input', _value)
                    this.$emit('on-plus', _value)
                }
            },
            handleKeyup (event) {
                // 键盘按下，如果为非数字，则删除
                const _value = this.value.replace(/\D/g, '')
                this.$emit('input', _value)
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
        },
        mounted () {
            if (this.value <= this.minNum) {
                this.$emit('input', this.minNum)
            }
        }
    }

</script>
<style lang="less">
    @import '../../assets/less/normalize.less';
    @import '../../assets/less/base.less';
    .ui-inputNumber{
        display: inline-block;
        overflow: hidden;
        width: 150px;
        position: relative
    }
    .ui-inputNumber .ui-input{
        padding: 0 40px;
    }
    .ui-inputNumber-icon{
        height: auto;
        width: 36px;
        line-height: 30px;
        top: 1px;
        text-align: center;
        color: #97a8be;
        cursor: pointer;
        position: absolute;
        z-index: 1;
        font-size: 14px;
    }
    .ui-inputNumber-icon:hover ~ .ui-input{
        border-color: #20a0ff
    }
    .icon-sub{
        left: 0;
        border-right: 1px solid #bfcbd9;
    }
    .icon-add2{
        right: 0;
        border-left: 1px solid #bfcbd9;
    }
    .ui-inputNumber-icon:hover{
        color: #20a0ff
    }
    .minus-decrease, .plus-decrease, .minus-decrease:hover, .plus-decrease:hover{
        color: #d1dbe5;
        cursor: not-allowed
    }

    .ui-inputNumber-icon.minus-decrease:hover ~ .ui-input, .ui-inputNumber-icon.plus-decrease:hover ~ .ui-input{
        border-color: #bfcbd9
    }
    .ui-inputNumber-disabled .ui-input,.ui-inputNumber-disabled .ui-inputNumber-icon,.ui-inputNumber-disabled .ui-inputNumber-icon:hover,.ui-inputNumber-disabled .ui-inputNumber-icon:hover ~ .ui-input{
        color: #d1dbe5;
        cursor: not-allowed;
        border-color: #d1dbe5
    }
</style>
