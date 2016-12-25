<template>
    <div id="tree">
        <ul>
            <cp-tree
                class="item"
                :model="treeData">
            </cp-tree>
        </ul>
    </div>
</template>

<script>
    import cpTree from '../cp-tree/cp-tree'
    export default {
        name: 'tree',
        components: {
            'cp-tree': cpTree
        },
        data () {
            return {
                treeData: {
                    name: 'This is My Tree',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' },
                        {
                            name: 'child folder',
                            children: [
                                {
                                    name: 'child folder',
                                    children: [
                                        { name: 'hello' },
                                        { name: 'wat' }
                                    ]
                                },
                                { name: 'hello' },
                                { name: 'wat' },
                                {
                                    name: 'child folder',
                                    children: [
                                        { name: 'hello' },
                                        { name: 'wat' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="less"></style>
