<template>
    <div id="slide-tree">
        <li class="item">
            <div
                class="treeTitle"
                :class="{ bolds: isFolder }"
                @click="toggle">
                {{model.name}}

                <div class="icon">
                    <i class="fa-plus" :class="{ 'fa-minus': open }" v-if="isFolder"></i>
                </div>
            </div>
            
            <!--<i class="fa-minus" v-if="!isFolder"></i>-->
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
                open: true,
                isFolder: true
            }
        },
        computed: {
            isFolder () {
                return this.model.children && this.model.children.length
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
        position: relative;
        cursor: pointer;
        &:hover{
            transition: all 0.25s;
            background-color: rgba(0,0,0,.12);
        }
    }
    .bolds{
        font-size: 16px;
        font-weight: bold;
    }
</style>