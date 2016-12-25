<template>
    <div id="slide-tree">
        <li class="item">
            <div
            :class="{ bold: isFolder }"
            @click="toggle">
            {{model.name}}
            </div>
            <i class="fa-plus" v-if="isFolder"></i>
            <i class="fa-minus" v-if="!isFolder"></i>
            <ul v-show="open" v-if="isFolder">
                <slide-tree
                    class="item"
                    v-for="model in model.children"
                    :model="model">
                </slide-tree>
            </ul>
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
                open: true
            }
        },
        computed: {
            isFolder () {
                return true
            }
        },
        methods: {
            toggle () {
                this.isFolder = !this.isFolder
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/less/import.less";
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
</style>