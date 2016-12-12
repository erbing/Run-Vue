<template>
    <div class="run-select">
        <div class="select-title">
            {{title}}
        </div>
        <div class="icon" @click="plus">
            <i class="fa-plus"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'select',
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        methods: {
            plus () {
                console.log(1)
            }
        }
    }
</script>

<style lang="less">
    i{
        font-family: FontAwesome;
        font-style: normal;
        font-weight: normal;
    }
    .run-select{
        height: 48px;
        line-height: 48px;
        margin-left: 16px;
        margin-right: 16px;
        margin-top: 8px;
        position: relative;
        cursor: pointer;
        &:hover{
            backgroud-color: #666;
        }
        .select-title{
            font-size: 16px;
            font-family: Roboto,Lato,sans-serif;
            display: flex;
            flex: 1;
            align-self: center;
            width: 100%;
        }
        .icon{
            font-size: 5px;
            display: flex;
            flex: 1;
            text-align: center;
            align-items: center;
            flex-pack: start;
            justify-content: flex-start;
            width: 40px;
            height: 100%;
            position: absolute;
            color: #757575;
            top: 0;
            right: 12px;
            max-height: 72px;
        }
    }
</style>