<!--
    author: tony
    title: 搜索
    params:
        value: 搜索框的值
        placeholder：搜索框占位文字
        icon：搜索框的搜索按钮图标
        searchText：搜索框的搜索按钮文字
    event:
        search: 搜索按钮点击时触发事件
        on-enter: 搜索框获得焦点，键盘按下enter键时触发
-->
<template>
    <div class="ui-search-wrap" >
        <span class="searchText" v-if="isSearchText" @click="handleClick">{{searchText}}</span>
        <i class="ui-icon" v-if="iconName" :class="iconName" @click="handleClick"></i>
        <div class="ui-search-box">
            <input class="ui-search-input"
            type="text" 
            v-model="model"  
            :placeholder="placeholder" 
            @keyup.enter="handleEnter">
            <i class="ui-icon icon-close" v-show="value" @click="clear"></i>
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
            searchText: String
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
            },
            isSearchText () {
                return this.searchText
            }
        },
        methods: {
            handleClick () {
                this.$emit('search', this.value)
            },
            clear () {
                this.$emit('input', '')
            },
            handleEnter () {
                this.$emit('on-enter', this.value)
            }
        }
    }

</script>
<style lang="less">
    @import '../../assets/less/normalize.less';
    @import '../../assets/less/base.less';

    .ui-search-wrap {
        display: inline-block;
        width: 100%;
        position: relative
    }
    .ui-search-box{
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
    .ui-search-input {
        width: 100%;
        height: 100%;
        border: none;
        cursor: text;
        border-radius: 5px;
        padding-right: 25px;
        padding-left: 5px;
    }
    .ui-icon {
        padding: 5px 0; 
    }
    .ui-search-input:focus{
        outline: none;
    }

    .ui-search-box:focus,.ui-search-box:hover {
        border-color: #5cadff
    }
    .ui-search-box::-webkit-input-placeholder {
        color: #c3cbd6
    }

    .ui-search-box:focus {
        outline: 0;
        box-shadow: 0 0 0 2px rgba(51,153,255,.2)
    }

    .ui-search-box-disabled .ui-search-box  {
        background-color: #f3f3f3;
        opacity: 1;
        cursor: not-allowed;
        color: #ccc
    }
    .ui-search-box-disabled .ui-icon {
        cursor: not-allowed;
    }
    .ui-search-box[disabled]:hover,fieldset[disabled] .ui-search-box:hover {
        border-color: #dfe4e9
    }
    
    .ui-search-wrap .ui-icon, .ui-search-wrap .searchText{
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
    .ui-search-wrap .searchText{
        color: #666666;
        line-height: 32px;
        font-size: 16px;
    }
    .ui-search-wrap .ui-icon:before{
       vertical-align: sub;
       display: inline-block;
    }

    .ui-search-wrap .ui-icon+.ui-search-box, .ui-search-wrap .searchText+.ui-search-box{
        margin-right: 40px;
    }
    .ui-search-wrap .icon-close{
        width: 25px;
    }
    .ui-search-wrap .icon-close:before{
        padding-top: 5px;
    }

</style>
