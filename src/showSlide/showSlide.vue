<template>
    <div id="show-tree">
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="slideData">
            </slide-tree>
        </ul>
    </div>
</template>

<script>
    import SlideTree from '../slide-tree/slide-tree'
    export default {
        name: 'show-tree',
        components: {
            'slide-tree': SlideTree
        },
        data () {
            return {
                slideData: {
                    name: '如何使用',
                    children: [
                        {name: '入门基础',
                            children: [
                                {name: 'vuejs'},
                                {name: '社区'}]
                        },
                        {name: '使用教程'}
                    ]
                }
            }
        }
    }
</script>

<style lang="less">
    .useUl {
        list-style: none;
        padding: 0px;
        margin: 0;
    }
</style>