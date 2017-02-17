<!--
    author: tony
    title: 文本域
    params:
        value: 文本域的值
        rows：文本域的行数
        placeholder：文本域占位文字
        disabled：文本域禁用状态，true表示禁用，false表示可用
        maxlength：文本域最大输入值
        readonly：文本域只读属性
    event:
        on-enter: 文本域获得焦点，键盘按下enter键时触发
        on-focus: 文本域获得焦点时触发
        on-blur: 文本域失去焦点时触发
        on-change：文本域失去焦点时，文本域的内容有改变时触发
-->
<template>
    <div class="ui-textarea-wrap" 
        :class="{
            'ui-textarea-disabled': disabled
        }">
        <textarea class="ui-textarea"
            v-model="model"
            :placeholder="placeholder"
            :disabled="disabled"
            :rows="rows"
            :maxlength="maxlength"
            :readonly="readonly"
            @keyup.enter="handleEnter"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"></textarea>
    </div>
</template>
<script>
    export default {
        name: 'textarea',
        props: {
            value: [String, Number],
            rows: {
                type: Number,
                default: 5
            },
            placeholder: String,
            disabled: Boolean,
            maxlength: Number,
            readonly: Boolean
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
    .ui-textarea-wrap, .ui-textarea {
        display: inline-block;
        width: 100%;
        position: relative
    }
    .ui-textarea {
        height: auto;
        vertical-align: bottom;
        line-height: 1.5;
        padding: 4px 7px;
        font-size: 14px;
        border: 1px solid #d7dde4;
        border-radius: 4px;
        color: #657180;
        background-color: #fff;
        background-image: none;
        cursor: text;
        transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out
    }

    .ui-textarea:focus,.ui-textarea:hover {
        border-color: #5cadff
    }

    .ui-textarea::-moz-placeholder {
        color: #c3cbd6;
        opacity: 1
    }

    .ui-textarea:-ms-textarea-placeholder {
        color: #c3cbd6
    }

    .ui-textarea::-webkit-textarea-placeholder {
        color: #c3cbd6
    }

    .ui-textarea:focus {
        outline: 0;
        box-shadow: 0 0 0 2px rgba(51,153,255,.2)
    }

    .ui-textarea-disabled .ui-textarea  {
        background-color: #f3f3f3;
        opacity: 1;
        cursor: not-allowed;
        color: #ccc
    }

</style>
