<template>
    <div id="slide-tree">
        <li class="item">
            <div class="treeTitle" :class="{ bolds: isFolder }" @click="toggle">
                <router-link exact :to="toRouter"  tag="div">
                    {{model.name}}
                    <div class="icon">
                        <i class="fa-plus" :class="{ 'fa-minus': open }" v-if="isFolder"></i>
                    </div>
                </router-link>
            </div>
            <transition name="slide-fade">
                <!--<i class="fa-minus" v-if="!isFolder"></i>-->
                <ul v-show="open" v-if="isFolder" class="useUl2">
                    <slide-tree
                        class="items"
                        v-for="model in model.children"
                        :model="model">
                    </slide-tree>
                </ul>
            </transition>   
        </li>
    </div>
</template>

<script>
    export default {
        name: 'slide-tree',
        props: {
            model: Object
        },
        data () {
            return {
                open: true,
                isFolder: true
            }
        },
        computed: {
            isFolder () {
                return this.model.children && this.model.children.length
            },
            toRouter () {
                if (this.model.children && this.model.children.length) {
                    return '#'
                } else {
                    return this.model.router
                }
            }
        },
        methods: {
            toggle () {
                // window.alert(this.isFolder)
                if (this.isFolder) {
                    this.open = !this.open
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/less/import.less";
    .bounce-enter-active {
    animation: bounce-in .5s;
    }
    .bounce-leave-active {
    animation: bounce-out .5s;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        /*25% {
            transform: scale(0.25);
        }
        50% {
            transform: scale(0.5);
        }
        75% {
            transform: scale(0.75);
        }*/
        100% {
            transform: scale(1);
        }
    }
    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        /*25% {
            transform: scale(0.75);
        }
        50% {
            transform: scale(0.5);
        }
        75% {
            transform: scale(0.25);
        }*/
        100% {
            transform: scale(0);
        }
    }    
    .fade-enter-active, .fade-leave-active {
        transition: opacity .15s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .slide-fade-enter-active {
    transition: all .3s ease;
    }
    .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(50px);
    opacity: 0;
    }    
    .hide{
        opacity: 0;
        display: none;
        transition: all 0.25s;
    }
    .useUl2{
        list-style: none;
        padding: 0px;
        margin: 0;
        transition: all 0.45s;
    }
    .items {
        cursor: pointer;
        padding-left: 16px;
        font-size: 16px;
        background: rgba(0, 0, 0, .12);
        line-height: 48px;
        color: #888;
        margin-bottom: 1px;
        transition: all 0.45s;
        &:hover{
            transition: all 0.25s;
            background-color: rgba(0,0,0,0);
        }
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
    .treeTitle{
        height: 48px;
        line-height: 48px;
        padding-left: 16px;
        position: relative;
        cursor: pointer;
        &:hover{
            transition: all 0.25s;
            background-color: rgba(0,0,0,.2);
        }
    }
    .bolds{
        font-size: 16px;
        font-weight: bold;
    }
</style>