<template>
    <router-link class="run-select" :to="to" tag="div">
        <div class="select-title">
            {{title}}
        </div>
        <div class="icon" @click="plus">
            <i class="fa-plus" v-if="puls"></i>
            <i class="fa-minus" v-if="!puls"></i>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'select',
        props: {
            to: {
                type: String,
                default: '/'
            },
            title: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                puls: true
            }
        },
        methods: {
            plus () {
                this.puls = !this.plus
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
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 8px;
        position: relative;
        cursor: pointer;
        &:hover{
            transition: all 0.25s;
            background-color: rgba(0,0,0,.12);
        }
        .select-title{
            margin-top: 6px;
            font-size: 16px;
            font-family: Roboto,Lato,sans-serif;
            display: flex;
            flex: 1;
            align-self: center;
            width: 100%;
        }
        .icon{
            line-height:48px;
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